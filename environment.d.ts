declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production"
      PORT?: string
      DATABASE_URL: string
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string
      GOOGLE_CLIENT_ID: string
      GOOGLE_CLIENT_SECRET: string
    }
  }
}

export {}
