import Head from "next/head"
import Link from "next/link"
import type { HTMLAttributes } from "react"

import Notes from "@scrawl/components/Notes"
import CreateNotes from "@scrawl/components/Create"
import Sidebar from "@scrawl/components/Sidebar"

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

export default function Layout({ title, ...props }: LayoutProps) {
  return (
    <>
      <Head>{title}</Head>
      <main>
        <Sidebar />
        <div
          className="px-10 w-full fixed overflow-y-auto left-64"
          {...props}
        />
      </main>
    </>
  )
}
