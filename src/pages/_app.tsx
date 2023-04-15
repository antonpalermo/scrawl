import React from "react"
import type { AppProps } from "next/app"

import { SessionProvider } from "next-auth/react"

export default function MainApp({
  Component,
  pageProps: { session, ...props }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...props} />
    </SessionProvider>
  )
}
