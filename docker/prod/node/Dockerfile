FROM node:16-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml", "./"]
COPY ["node/client/package.json", "node/client/"]
COPY ["node/server/package.json", "node/server/"]

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run --filter server build
