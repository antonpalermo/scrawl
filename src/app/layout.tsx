import "@scrawl/styles/globals.css"

import { Inter } from "next/font/google"

export const metadata = {
  title: "Home - Scrawl",
  description: "Welcome to Scrawl - your typical notes for devs"
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="absolute inset-0 dark:bg-slate-900 dark:text-slate-50 bg-slate-100 text-gray-900">
          {children}
        </main>
      </body>
    </html>
  )
}
