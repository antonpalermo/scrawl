import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure
} from "@scrawl/server/trpc"

const notesRouter = createTRPCRouter({
  hello: publicProcedure.query(async ({ ctx }) => {
    return "Holla! " + ctx.session.user.name
  }),
  secret: protectedProcedure.query(async () => {
    return "Super secret message!"
  })
})

export default notesRouter
