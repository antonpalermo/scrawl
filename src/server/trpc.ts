import type { CreateNextContextOptions } from "@trpc/server/adapters/next"

import { prisma } from "@scrawl/server/prisma"
import { Session } from "next-auth"
import { ZodError } from "zod"
import { TRPCError, initTRPC } from "@trpc/server"
import { getServerAuthSession } from "@scrawl/server/auth"

import SuperJSON from "superjson"

type CreateContextOptions = {
  session: Session | null
}

export const createInnerTRPCContext = ({ session }: CreateContextOptions) => {
  return {
    session,
    prisma
  }
}

export const createTRPCContext = async ({
  req,
  res
}: CreateNextContextOptions) => {
  const session = await getServerAuthSession({ req, res })
  return createInnerTRPCContext({
    session
  })
}

const trpc = initTRPC.context<typeof createTRPCContext>().create({
  transformer: SuperJSON,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null
      }
    }
  }
})

export const createTRPCRouter = trpc.router
export const publicProcedure = trpc.procedure

const enforceAuthentication = trpc.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" })
  }

  return next({
    ctx: {
      session: { user: ctx.session.user, ...ctx.session }
    }
  })
})

export const protectedProcedure = trpc.procedure.use(enforceAuthentication)
