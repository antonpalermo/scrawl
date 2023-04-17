import Head from "next/head"
import Link from "next/link"
import { HTMLAttributes, useState } from "react"

import Notes from "@scrawl/components/Notes"
import CreateNotes from "@scrawl/components/Create"
import Sidebar from "@scrawl/components/Sidebar"
import CreateDialog from "@scrawl/components/CreateDialog"

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

export default function Layout({ title, ...props }: LayoutProps) {
  return (
    <>
      <Head>{title}</Head>
      <main>
        <Sidebar />
        <CreateDialog />
        <div
          className="px-10 fixed left-64 inset-0 overflow-y-auto "
          {...props}
        />
      </main>
    </>
  )
}
