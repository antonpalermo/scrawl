import { PlusIcon } from "@heroicons/react/24/outline"

import Notes from "@scrawl/components/Notes"
import Link from "next/link"

export function SidebarInteraction() {
  return (
    <div className="w-full inline-flex items-center justify-between mb-5">
      <span className="text-slate-500 font-medium text-ms">Notes</span>
      <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
        <PlusIcon className="w-5 h-5" />
      </button>
    </div>
  )
}

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-64 z-[60] bg-white border-r border-r-gray-200 pt-7 pb-10">
      <nav className="px-6 w-full flex flex-col flex-wrap">
        <Link
          href={{ pathname: "/" }}
          className="block bg-gray-200 hover:bg-gray-300 rounded px-3 py-2 text-sm font-medium"
        >
          Home
        </Link>
        <hr className="my-5" />
        <SidebarInteraction />
        <Notes />
      </nav>
    </div>
  )
}
