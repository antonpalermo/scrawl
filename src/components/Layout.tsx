import Head from "next/head"
import Link from "next/link"
import type { HTMLAttributes } from "react"

import Notes from "@scrawl/components/Notes"
import CreateNotes from "@scrawl/components/Create"

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

export default function Layout({ title, ...props }: LayoutProps) {
  return (
    <>
      <Head>{title}</Head>
      <main>
        <CreateNotes />
        <Link href={{ pathname: "/" }}>Home</Link>
        <Notes />
        <div {...props} />
      </main>
    </>
  )
}
