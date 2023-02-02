FROM node:16-bullseye
WORKDIR /app/backend/

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

COPY package*.json .npmrc ../pnpm*.yaml /app/backend/
# RUN npm install -g pnpm
RUN corepack enable pnpm
RUN pnpm fetch
RUN pnpm install
COPY . .