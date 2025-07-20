FROM --platform=linux/amd64 node:23.7.0-bookworm

RUN apt-get update && apt-get install -y \
    pkg-config \
    default-libmysqlclient-dev \
    build-essential \
    libssl-dev \
    libffi-dev \
    cargo \
    npm

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm run build

RUN npm install -g serve
RUN npm cache clean --force


ENV NODE_NO_WARNINGS=1


EXPOSE 3000
ENV PORT=3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl --fail http://localhost:3000 || exit 1

CMD ["npx", "serve", "-s", "build"]
