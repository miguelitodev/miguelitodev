# Usar a versão mais recente do Node
FROM node:23-alpine AS build

# Definir um diretório dentro do container para trabalhar o build da aplicação
WORKDIR /app

# Copiar apenas os arquivos essenciais para instalar as dependências
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Instalar o pnpm globalmente e garantir que o binário esteja no PATH
RUN npm install -g pnpm && \
    ln -s /usr/local/bin/pnpm /usr/bin/pnpm

# Instala apenas as dependências principais, ignorando as dependências de desenvolvimento do package.json
RUN pnpm install --prod

# Instala o eslint, pois o Next.js precisa que ele esteja presente
RUN pnpm install --save-dev eslint

# Copia todos os arquivos do projeto para dentro do container
COPY . .

# Define a variável de ambiente para produção
ENV NODE_ENV=production

# Faz o build da aplicação Next.js
RUN pnpm run build

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Inicia a aplicação Next.js no modo de produção
CMD ["pnpm", "start"]
