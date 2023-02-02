FROM node:17.4.0
WORKDIR /app/frontend
COPY package*.json /app/frontend
COPY .npmrc ../pnpm*.yaml /app/frontend/
RUN npm install -g pnpm
RUN pnpm install
COPY . .