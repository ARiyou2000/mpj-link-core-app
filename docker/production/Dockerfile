FROM node:18-alpine AS base

# 1. Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then echo "Install dependencies using yarn." && yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then echo "Install dependencies using npm." && npm ci; \
  elif [ -f pnpm-lock.yaml ]; then echo "Install dependencies using pnpm." && yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# 2. Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .


## 2.5. Environment variables must be present at build time
## https://github.com/vercel/next.js/discussions/14030
#ARG ENV_VARIABLE
#ENV ENV_VARIABLE=${ENV_VARIABLE}
#ARG NEXT_PUBLIC_ENV_VARIABLE
#ENV NEXT_PUBLIC_ENV_VARIABLE=${NEXT_PUBLIC_ENV_VARIABLE}

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js based on the preferred package manager
RUN \
  if [ -f yarn.lock ]; then echo "Build using yarn." && yarn build; \
  elif [ -f package-lock.json ]; then echo "Build using npm." && npm run build; \
  elif [ -f pnpm-lock.yaml ]; then echo "Build using pnpm." && pnpm build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Note: It is not necessary to add an intermediate step that does a full copy of `node_modules` here


# 3. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

## 3.5. Environment variables must be redefined at run time
## https://github.com/vercel/next.js/discussions/14030
#ARG ENV_VARIABLE
#ENV ENV_VARIABLE=${ENV_VARIABLE}
#ARG NEXT_PUBLIC_ENV_VARIABLE
#ENV NEXT_PUBLIC_ENV_VARIABLE=${NEXT_PUBLIC_ENV_VARIABLE}

USER nextjs

# Note: Don't expose ports here, Compose will handle that for us
EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
