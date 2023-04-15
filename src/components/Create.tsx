import React from "react"

import { api } from "@scrawl/server/api"
import { Formik, Form, FormikHelpers } from "formik"

import Input from "@scrawl/components/Input"

interface NoteFields {
  name: string
}

export default function CreateNotes() {
  const initialData: NoteFields = {
    name: ""
  }

  const { mutateAsync } = api.notes.create.useMutation({
    onSuccess: data => {
      // TODO: add react-hot-toast here!
      console.log("Success!", data)
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
