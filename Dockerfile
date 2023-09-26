ARG BUN_VERSION=oven/bun:1.0

FROM ${BUN_VERSION} AS dependency-base

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install --frozen-lockfile

FROM dependency-base AS prod-base

# Copy the source code
COPY . .

# Build the app
RUN bun --bun run build

FROM ${BUN_VERSION} AS prod

COPY --from=prod-base /app/.output /app/.output

ENV NUXT_HOST=0.0.0.0

ARG NUXT_APP_VERSION
ENV NUXT_APP_VERSION=${NUXT_APP_VERSION}

ENV NODE_ENV=production

EXPOSE 3000

CMD ["bun", "--bun", "run", "/app/.output/server/index.mjs"]
