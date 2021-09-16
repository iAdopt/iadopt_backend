import { Pool, QueryResult } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://admin:iadopt_db@localhost:5432/iadopt'
});

export default (text: string, params: any[]): Promise<QueryResult> => pool.query(text, params);
