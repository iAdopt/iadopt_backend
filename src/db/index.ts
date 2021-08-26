/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pool, QueryResult } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default (text: string, params: any[]): Promise<QueryResult<any>> => pool.query(text, params);
