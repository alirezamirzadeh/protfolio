import { getPosts } from '$lib/get-posts'


export async function get({ url: { searchParams } }) {
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')) : undefined
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : undefined

  return {
    body: JSON.stringify(getPosts({ limit, page }))
  }
}