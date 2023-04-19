import { EditorContent, JSONContent, useEditor } from "@tiptap/react"

import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react"

export interface ContentProps {
  editable?: boolean
  content?: JSONContent
}

export default function Content({ editable, content }: ContentProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2]
        }
      })
    ],
    editable,
    content,
    editorProps: {
      attributes: {
        class: "prose focus:outline-none"
      }
    }
  })

  useEffect(() => {
    editor?.setEditable(editable)
  }, [editable, editor])

  return <EditorContent editor={editor} />
}
