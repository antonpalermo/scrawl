export const metadata = {
  title: "Home",
  description: "Welcome to Scrawl - your typical notes for devs"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
