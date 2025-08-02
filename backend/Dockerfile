# builder stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# production stage
FROM builder AS production

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/package*.json ./

RUN npm ci --only=production

COPY . .

CMD ["node", "index.js"]