import React, { useState } from "react"
import Content from "@scrawl/components/Content"

export default function NoteContents() {
  const [edit, setEdit] = useState<boolean>(true)

  return (
    <div>
      <button onClick={() => setEdit(prev => !prev)}>
        {edit ? "save" : "edit"}
      </button>
      <Content editable={edit} />
    </div>
  )
}
