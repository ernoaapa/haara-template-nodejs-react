# Multi-stage Dockerfile: the `dev` target is what the platform runs in
# development mode (source is volume-mounted from the PVC, Vite hot-reloads).
# The final stage is the prod image built by Shipwright.

FROM node:20-alpine AS dev
EXPOSE 3000
CMD ["sh", "-c", "npm install && npm run dev"]

FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
