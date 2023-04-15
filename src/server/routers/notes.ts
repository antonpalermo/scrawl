import { createTRPCRouter, publicProcedure } from "@scrawl/server/trpc"

const notesRouter = createTRPCRouter({
  hello: publicProcedure.query(async ({ ctx }) => {
    return "Holla! " + ctx.session.user.name
  })
})

export default notesRouter
