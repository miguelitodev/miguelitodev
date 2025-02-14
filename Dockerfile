FROM node:23-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

EXPOSE 3000

# Build group
FROM base AS builder
WORKDIR /app

# Copy the package files and install dependencies
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Run the build command
RUN npm run build

# Production group
FROM base AS production
WORKDIR /app

ENV NODE_ENV=production

# Install dependencies as root
RUN pnpm install --frozen-lockfile

# Create the nextjs user and group
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

# Change ownership of the copied files to the nextjs user
RUN chown -R nextjs:nodejs /app

# Switch to the nextjs user
USER nextjs

CMD ["pnpm", "start"]

# Dev group
FROM base AS dev
ENV NODE_ENV=development

RUN pnpm install

COPY . .

CMD ["pnpm", "run", "dev"]