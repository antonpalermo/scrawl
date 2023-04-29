import { cache } from "react"

export const getBaseUrl = cache(() =>
  process.env.NODE_ENV !== "development"
    ? `https://app-dir.vercel.app`
    : `http://localhost:${process.env.PORT ?? 3000}`
)
