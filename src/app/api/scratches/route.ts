import { NextResponse } from "next/server"

import { prisma } from "@scrawl/server/prisma"

export async function GET() {
  const notes = await prisma.note.findMany({
    where: { owner: { email: "angelo.dragonpay@gmail.com" } },
    select: { id: true, name: true }
  })

  return NextResponse.json(notes)
}
