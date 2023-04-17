import { api } from "@scrawl/server/api"
import { useSession } from "next-auth/react"

import Link from "next/link"

export default function Notes() {
  const { status } = useSession()
  const { data: notes, isLoading: loadingNotes } = api.notes.notes.useQuery(
    undefined,
    {
      enabled: status !== "unauthenticated",
      staleTime: 5 * 60 * 1000
    }
  )

  if (loadingNotes) {
    return <h1>Loading...</h1>
  }

  return (
    <ul className="space-y-3">
      {notes.map(note => (
        <Link
          key={note.id}
          href={{ pathname: "/notes/[id]", query: { id: note.id } }}
          className="block bg-gray-200 hover:bg-gray-300 rounded px-3 py-2 text-sm font-medium"
        >
          {note.name}
        </Link>
      ))}
    </ul>
  )
}
