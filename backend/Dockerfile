# builder stage
FROM node:18-alpine AS builder

WORKDIR /app

RUN corepack enable

COPY pnpm-lock.yaml ./
COPY package.json ./
COPY backend ./backend/

RUN pnpm install --frozen-lockfile --shamefully-hoist

COPY . .

RUN npm run build

# production stage
FROM builder AS production

WORKDIR /app/backend

COPY --from=builder /app/backend ./
COPY --from=builder /app/pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

EXPOSE 3000

CMD ["pnpm", "start"]