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
          data: {
            name,
            owner: { connect: { email } },
            context: { create: {} }
          }
        })
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" })
        }
      }
    }),

  notes: protectedProcedure.query(async ({ ctx }) => {
    const email = ctx.session.user.email

    try {
      const notes = await ctx.prisma.note.findMany({
        where: { owner: { email } },
        orderBy: [{ createdDate: "asc" }]
      })
      if (!notes) {
        throw new TRPCError({ code: "NOT_FOUND" })
      }
      return notes
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" })
      }
    }
  }),

  getById: protectedProcedure
    .input(z.string().min(1))
    .query(async ({ ctx, input: id }) => {
      try {
        const note = ctx.prisma.note.findUnique({
          where: { id },
          include: {
            context: {
              select: {
                body: true,
                raw: true,
                createdDate: true,
                updatedDate: true
              }
            }
          }
        })

        if (!note) {
          throw new TRPCError({ code: "NOT_FOUND" })
        }

        return note
      } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" })
        }
      }
    })
})

export default notesRouter
