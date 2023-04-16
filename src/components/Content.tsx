import { EditorContent, useEditor } from "@tiptap/react"

import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react"

export interface ContentProps {
  editable?: boolean
}

export default function Content({ editable }: ContentProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    editable
  })

  useEffect(() => {
    editor?.setEditable(editable)
  }, [editable, editor])

  return <EditorContent editor={editor} />
}
