import React from "react"
import { api } from "@scrawl/server/api"

export default function Home() {
  const { data, isLoading } = api.notes.hello.useQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return <h1>{JSON.stringify(data)}</h1>
}
