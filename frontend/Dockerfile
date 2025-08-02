# build stage

FROM node:18-alphine AS builder

WORKDIR /app/frontend

RUN corepack enable

COPY ./pnpm-lock.yaml ../
COPY ./package.json .

RUN pnpm install --frozen-lockfile --shamefully-hoist

COPY . .

RUN npm run build

# production stage

FROM node:18-alpine AS production

WORKDIR /app/frontend

COPY --from=builder /app/frontend/dist ./dist
COPY --from=builder /app/frontend/package*.json ./
COPY ./pnpm-lock.yaml ../

RUN pnpm install --frozen-lockfile --prod

EXPOSE 3000

CMD ["pnpm", "start"]