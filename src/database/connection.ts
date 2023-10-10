import { Pool } from 'pg'

const pl: Pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    
})

export {pl}