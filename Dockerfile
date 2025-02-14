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

COPY . .

RUN npm run build

# Production group
FROM base AS production
WORKDIR /app

ENV NODE_ENV=production
RUN pnpm install --frozen-lockfile

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD ["pnpm", "start"]

# Dev group
FROM base AS dev
ENV NODE_ENV=development

RUN pnpm install

COPY . .

CMD ["pnpm", "run", "dev"]
