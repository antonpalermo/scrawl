import NextAuth from "next-auth"
import { NextApiRequest, NextApiResponse } from "next"

import { authOptions } from "@scrawl/server/auth"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return await NextAuth(req, res, authOptions)
}
