import Layout from "@scrawl/components/Layout"
import React, { ReactElement } from "react"

export default function Home() {
  return <h1>Home</h1>
}

Home.getLayout = function (page: ReactElement) {
  return <Layout title="Home">{page}</Layout>
}
