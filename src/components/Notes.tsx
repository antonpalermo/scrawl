import { api } from "@scrawl/server/api"
import { useSession } from "next-auth/react"
import { useCallback } from "react"

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
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          <a href="#">{note.name}</a>
        </li>
      ))}
    </ul>
  )
}
