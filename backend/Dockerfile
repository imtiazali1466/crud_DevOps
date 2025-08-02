# builder stage
FROM node:18-alpine AS builder

WORKDIR /app/backend

RUN corepack enable

COPY ./pnpm-lock.yaml ../
COPY ./package.json .

RUN pnpm install --frozen-lockfile --shamefully-hoist

COPY . .

RUN npm run build

# production stage
FROM builder AS production

WORKDIR /app/backend

COPY --from=builder /app/backend/build ./build
COPY --from=builder /app/backend/package*.json ./
COPY ./pnpm-lock.yaml ../

RUN pnpm install --frozen-lockfile --prod

EXPOSE 3000

CMD ["pnpm", "start"]