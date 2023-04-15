import { createNextApiHandler } from "@trpc/server/adapters/next"

import { env } from "@scrawl/env.mjs"
import { appRouter } from "@scrawl/server/root"
import { createTRPCContext } from "@scrawl/server/trpc"

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          )
        }
      : undefined
})
