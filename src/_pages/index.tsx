import Layout from "@scrawl/components/Layout"
import React, { ReactElement } from "react"

export default function Home() {
  return <div>Sample</div>
}

Home.getLayout = function (page: ReactElement) {
  return <Layout title="Home">{page}</Layout>
}
