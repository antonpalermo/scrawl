import React from "react"

import { api } from "@scrawl/server/api"
import { Formik, Form, FormikHelpers } from "formik"

import Input from "@scrawl/components/Input"
import { useDialog } from "./DialogProvider"
import { toast } from "react-hot-toast"

interface NoteFields {
  name: string
}

export default function CreateNotes() {
  const { toggle } = useDialog()
  const initialData: NoteFields = {
    name: ""
  }
  const ctx = api.useContext()

  const { mutateAsync } = api.notes.create.useMutation({
    onSuccess: data => {
      toast.success("Notes created successfuly!")
      ctx.notes.invalidate()
      toggle(val => !val)
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
          <div>
            <label>Name</label>
            <Input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
        </Form>
      )}
    </Formik>
  )
}
