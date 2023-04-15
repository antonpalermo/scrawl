import { z } from "zod"

import { Prisma } from "@prisma/client"
import { TRPCError } from "@trpc/server"
import { createTRPCRouter, protectedProcedure } from "@scrawl/server/trpc"

const notesRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input: { name } }) => {
      const email = ctx.session.user.email
      try {
        return await ctx.prisma.note.create({
          data: { name, owner: { connect: { email } } }
        })
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" })
        }
      }
    })
})

export default notesRouter
