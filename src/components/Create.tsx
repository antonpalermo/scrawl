import React from "react"

import { api } from "@scrawl/server/api"
import { Formik, Form, FormikHelpers } from "formik"

import Input from "@scrawl/components/Input"
import { useDialog } from "./DialogProvider"
import { toast } from "react-hot-toast"
import { useRouter } from "next/router"

interface NoteFields {
  name: string
}

export default function CreateNotes() {
  const { toggle } = useDialog()
  const initialData: NoteFields = {
    name: ""
  }
  const ctx = api.useContext()
  const router = useRouter()

  const { mutateAsync } = api.notes.create.useMutation({
    onSuccess: data => {
      ctx.notes.invalidate()

      toggle(val => !val)

      router.push({
        pathname: "/notes/[id]",
        query: { id: data.id }
      })

      toast.success("Notes created successfuly!")
    }
  })

  async function onSubmit(
    value: NoteFields,
    helpers: FormikHelpers<NoteFields>
  ) {
    await mutateAsync({ name: value.name })
  }

  return (
    <Formik initialValues={initialData} onSubmit={onSubmit}>
      {({ values, handleChange, isSubmitting }) => (
        <Form>
          <div className="my-3">
            <label className="block text-sm text-slate-500 font-semibold mb-2">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-indigo-200 text-indigo-600 px-3 py-2 text-sm font-medium rounded float-right"
            type="submit"
            disabled={isSubmitting}
          >
            Create
          </button>
        </Form>
      )}
    </Formik>
  )
}
