/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pool, QueryResult } from 'pg';

const dbConfig = {
  user: 'admin',
  host: 'localhost',
  database: 'iadopt',
  password: 'iadopt_db',
  port: 5432,
};

const pool = new Pool(dbConfig);

const query = (text: string, params: any[], callback: (error: Error, result: QueryResult) => void): void => {
  pool.query(text, params, callback);
};

export default {
  query,
};
