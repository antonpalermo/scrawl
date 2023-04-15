import React from "react"
import { api } from "@scrawl/server/api"
import CreateNotes from "@scrawl/components/Create"

export default function Home() {
  return (
    <main>
      <CreateNotes />
    </main>
  )
}
