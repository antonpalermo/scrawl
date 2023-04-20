import Image from "next/image"
import { useSession } from "next-auth/react"

export default function Navbar() {
  const { data, status } = useSession()

  return (
    <nav className="fixed top-0 left-64 right-0 py-4 bg-slate-100 bg-opacity-25">
      <div className="px-5 w-full inline-flex items-center justify-end">
        {status !== "loading" ? (
          <Image
            src={data?.user.image}
            width={35}
            height={35}
            alt="user avatar"
            className="rounded-full"
          />
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </nav>
  )
}
