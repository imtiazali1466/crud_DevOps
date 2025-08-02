# builder stage
FROM node:18-alpine AS builder

WORKDIR /app/backend

RUN corepack enable

COPY ../pnpm-lock.yaml /app/
COPY ../package.json /app/
COPY ./package.json .

RUN pnpm install --frozen-lockfile --shamefully-hoist

COPY . .

# production stage
FROM builder AS production

WORKDIR /app/backend

COPY --from=builder /app/backend ./
COPY --from=builder /app/pnpm-lock.yaml ./app/
COPY --from=builder /app/package.json ./app

RUN pnpm install --frozen-lockfile --prod

EXPOSE 3000

CMD ["pnpm", "start"]