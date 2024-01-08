FROM node:18-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then echo "Install dependencies using yarn." && yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then echo "Install dependencies using npm." && npm ci; \
  elif [ -f pnpm-lock.yaml ]; then echo "Install dependencies using pnpm." && yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY . .

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at run time
# ENV NEXT_TELEMETRY_DISABLED 1

# Note: Don't expose ports here, Compose will handle that for us

# Start Next.js in development mode based on the preferred package manager
CMD \
  if [ -f yarn.lock ]; then echo "Run dev server using yarn." && yarn dev; \
  elif [ -f package-lock.json ]; then echo "Run dev server using npm." && npm run dev; \
  elif [ -f pnpm-lock.yaml ]; then echo "Run dev server using pnpm." && pnpm dev; \
  else echo "Lockfile not found." && exit 1; \
  fi
