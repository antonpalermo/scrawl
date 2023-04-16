import React from "react"
import CreateNotes from "@scrawl/components/Create"
import Notes from "@scrawl/components/Notes"

export default function Home() {
  return (
    <main>
      <CreateNotes />
      <Notes />
    </main>
  ) 
}
