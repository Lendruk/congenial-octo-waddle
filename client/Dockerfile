FROM node:17.4.0
RUN corepack enable pnpm

WORKDIR /app/
COPY ../package*.json .
COPY ../pnpm*.yaml .
COPY package*.json /app/frontend/
RUN pnpm fetch
RUN pnpm install

WORKDIR /app/frontend/
COPY . .