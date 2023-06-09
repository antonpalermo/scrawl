import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"

import { useDialog } from "@scrawl/components/DialogProvider"
import CreateNotes from "@scrawl/components/Create"

export interface CreateDialogProps {}

export default function CreateDialog(props: CreateDialogProps) {
  const { isOpen, toggle } = useDialog()

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={toggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterTo="opacity-100"
          enterFrom="opacity-0"
          leave="ease-in duration-200"
          leaveTo="opacity-0"
          leaveFrom="opacity-100"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Create new note
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    This will create a new note. Please provide the required
                    details below.
                  </p>
                </div>
                <CreateNotes />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
