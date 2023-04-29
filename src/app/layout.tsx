import { getBaseUrl } from "@scrawl/lib/getBaseUrl"
import "@scrawl/styles/globals.css"

export const metadata = {
  title: "Scrawl",
  description: "Scrawl notes"
}

import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter"
})

const getScratches = async () =>
  await fetch(`${getBaseUrl()}/api/scratches`, { method: "GET" })

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const scratches = await (await getScratches()).json()

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>
        <main className="relative">
          <div className="bg-slate-50 border fixed inset-y-0 left-0 w-60">
            <div className="px-5">
              <nav className="my-5 space-y-2">
                {scratches.map(scratch => (
                  <Link
                    key={scratch.id}
                    href={{ pathname: "/" }}
                    className="block px-2 py-2 bg-gray-200 rounded text-sm font-medium"
                  >
                    {scratch.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="fixed left-60 inset-y-0 right-0 overflow-y-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
