// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


import { pl } from '@/database/connection'

type Data = {
  name: string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { rows } = await pl.query('SELECT * FROM links')
  const names = rows.map(row => row.name)
  res.status(200).json({ name: names })
}

