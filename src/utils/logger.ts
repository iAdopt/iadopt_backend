import query from '../db';
import { QueryResult } from 'pg';

export const logger = async (processType: string, message:string): Promise<QueryResult> => {
  return await query(
        `
            INSERT INTO logs(process, message)
            VALUES($1, $2)
        `
        , [processType, message]);
};
