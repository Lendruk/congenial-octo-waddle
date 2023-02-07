FROM node:16-bullseye
RUN corepack enable pnpm

WORKDIR /app/
COPY ../package*.json .
COPY ../pnpm*.yaml .
COPY package*.json /app/server/
RUN pnpm fetch
RUN pnpm install

WORKDIR /app/server/
COPY . .