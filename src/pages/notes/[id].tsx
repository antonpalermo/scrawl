import React, { ReactElement, useState } from "react"
import { JSONContent } from "@tiptap/react"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { createServerSideHelpers } from "@trpc/react-query/server"

import { api } from "@scrawl/server/api"
import { appRouter } from "@scrawl/server/root"
import { getServerAuthSession } from "@scrawl/server/auth"
import { createInnerTRPCContext } from "@scrawl/server/trpc"

import SuperJSON from "superjson"
import Layout from "@scrawl/components/Layout"
import Content from "@scrawl/components/Content"

export async function getServerSideProps({
  req,
  res,
  params
}: GetServerSidePropsContext) {
  const session = await getServerAuthSession({ req, res })
  const helpers = createServerSideHelpers({
    router: appRouter,
    transformer: SuperJSON,
    ctx: createInnerTRPCContext({ session })
  })
  const noteId = params?.id as string

  await helpers.notes.getById.prefetch(noteId)
  const note = await helpers?.notes.getById.fetch(noteId)

  if (!note) {
    return {
      props: {},
      notFound: true
    }
  }

  return {
    props: {
      trpcState: helpers.dehydrate(),
      noteId
    }
  }
}

export default function NoteContents({
  noteId
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [edit, setEdit] = useState<boolean>(false)
  const { data: note } = api.notes.getById.useQuery(noteId, {
    staleTime: 5 * 60 * 1000
  })

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

NoteContents.getLayout = function (page: ReactElement) {
  return <Layout title="Home">{page}</Layout>
}
