import { NextResponse, NextRequest } from "next/server"

import { prisma } from "@scrawl/server/prisma"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const note = await prisma.note.findUnique({
    where: { id: params.id },
    include: { context: true }
  })

  return NextResponse.json(note)
}
