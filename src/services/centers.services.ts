import { QueryResult } from 'pg';
import { dbErrorWrapper } from './dbErrorWrapper';
import query from '../db';

interface centerArgs {
  name: string,
  email: string,
  phone: string,
  address: string,
  password: string
}

export const insertCenter = dbErrorWrapper(async (args: centerArgs): Promise<QueryResult> => {
  return await query(
    `
    INSERT INTO centers (name, email, phone, address) 
    VALUES ($1, $2, $3, $4)
    `, [args.name, args.email, args.phone, args.address]);
});

export const getCenterById = dbErrorWrapper(async (id: any): Promise<QueryResult> => {
  return await query(
    `
      SELECT * FROM centers WHERE id = $1::uuid
      `, [id]);
});

export const getCenterByEmail = dbErrorWrapper(async (email: any): Promise<QueryResult> => {
  return await query(
    `
    SELECT * FROM centers WHERE email = $1
    `, [email]);
});
