import { QueryResult } from 'pg';
import { dbErrorWrapper } from './dbErrorWrapper';
import query from '../db';

export const getCenter = dbErrorWrapper(async (idCenter: any): Promise<QueryResult> => {

    const result = await query(
        `SELECT 
            id FROM centers WHERE id=$1::uuid;`, [idCenter]);
    return result.rows[0];
});