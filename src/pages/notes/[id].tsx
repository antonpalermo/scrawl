import React, { useState } from "react"
import Content from "@scrawl/components/Content"
import { useRouter } from "next/router"
import { api } from "@scrawl/server/api"
import { JSONContent } from "@tiptap/react"
import { useSession } from "next-auth/react"

export default function NoteContents() {
  const router = useRouter()
  const { status } = useSession()
  const [edit, setEdit] = useState<boolean>(false)

  const { data: note, isLoading } = api.notes.getById.useQuery(
    { noteId: `${router.query.id}` },
    { enabled: status !== "unauthenticated", staleTime: 5 * 60 * 1000 }
  )

  if (isLoading) {
    return <h1>Loading</h1>
  }

  return (
    <div>
      <button onClick={() => setEdit(prev => !prev)}>
        {edit ? "save" : "edit"}
      </button>
      <h1>{note.name}</h1>
      <Content editable={edit} content={note.context.raw as JSONContent} />
    </div>
  )
}
