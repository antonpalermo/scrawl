import type { NextAuthOptions } from "next-auth"

import GoogleProvider from "next-auth/providers/google"

import { env } from "@scrawl/env.mjs"
import { prisma } from "@scrawl/server/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

/**
 * next-auth options configuration.
 */
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ],
  session: {
    strategy: "jwt"
  }
}
