FROM node:20-alpine AS build

RUN npm install -g pnpm

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml", "./"]
COPY ["node/client/package.json", "node/client/"]
COPY ["node/server/package.json", "node/server/"]

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run --filter client build

FROM nginx:1.27-alpine

COPY --from=build /app/node/client/dist /var/www/html

COPY docker/prod/nginx/nginx.conf /etc/nginx/conf.d/default.conf