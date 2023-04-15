import { createTRPCRouter } from "@scrawl/server/trpc"

import notesRouter from "@scrawl/server/routers/notes"

export const appRouter = createTRPCRouter({
  notes: notesRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
