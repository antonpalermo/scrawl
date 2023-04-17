import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from "react"

export const DialogContext = createContext<
  { isOpen: boolean; toggle: Dispatch<SetStateAction<boolean>> } | undefined
>(undefined)

export function useDialog() {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error("Error on dialog context")
  }
  return context
}

export interface DialogProviderProps {
  children: ReactNode
}

export default function DialogProvider({ children }: DialogProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <DialogContext.Provider value={{ isOpen, toggle: setIsOpen }}>
      {children}
    </DialogContext.Provider>
  )
}
