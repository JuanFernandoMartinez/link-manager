// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllLinks } from '@/database/repository'
import { Link } from '@/types/Link'



type Data = {
  links: Link[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let links: Link[] = await getAllLinks()
  const data: Data = { links }
  res.status(200).json(data)
}

