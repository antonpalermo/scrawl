import { getBaseUrl } from "@scrawl/lib/getBaseUrl"

export default async function Scratch({ params }) {
  const request = await fetch(`${getBaseUrl()}/api/scratches/${params.id}`, {
    method: "GET"
  })

  const contents = await request.json()

  return <div>{JSON.stringify(contents)}</div>
}
