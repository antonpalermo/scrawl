import React from "react"
import Notes from "@scrawl/components/Notes"
import CreateNotes from "@scrawl/components/Create"

export default function Home() {
  return (
    <main>
      <CreateNotes />
      <Notes />
    </main>
  )
}
