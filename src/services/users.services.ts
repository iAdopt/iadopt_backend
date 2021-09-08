import { QueryResult } from 'pg';
import { dbErrorWrapper } from './dbErrorWrapper';
import query from '../db';

export const getUser = dbErrorWrapper(async (email:any): Promise<QueryResult> => {
  const result = await query(
        `SELECT 
            * FROM users WHERE email=$1;`, [email]);

  return result.rows[0];
});

export const insertUser = dbErrorWrapper(async (userArgs:any): Promise<QueryResult> => {
  const { email, password, center } = userArgs;
  return await query(
    'INSERT INTO users (email, password, center) VALUES ($1,$2,$3::uuid);', [email, password, center]);
});
