import React, { ReactElement, ReactNode } from "react"
import type { AppProps } from "next/app"

import { SessionProvider } from "next-auth/react"
import { api } from "@scrawl/server/api"
import { NextPage } from "next"

import "@scrawl/styles/globals.css"
import DialogProvider from "@scrawl/components/DialogProvider"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MainApp({
  Component,
  pageProps: { session, ...props }
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <SessionProvider session={session}>
      <DialogProvider>{getLayout(<Component {...props} />)}</DialogProvider>
    </SessionProvider>
  )
}

export default api.withTRPC(MainApp)
