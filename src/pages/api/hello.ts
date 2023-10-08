// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Pool } from 'pg'

const pl: Pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {rows} =  await pl.query("select * from link;") 
  console.log(rows)
  res.status(200).json({ name: 'John Doe' })
}

