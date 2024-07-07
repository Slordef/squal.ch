FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml", "./"]
COPY ["node/client/package.json", "node/client/"]
COPY ["node/server/package.json", "node/server/"]

RUN pnpm install --frozen-lockfile

COPY . .

CMD ["pnpm", "dev"]
