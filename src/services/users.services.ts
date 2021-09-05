import { QueryResult } from 'pg';
import { dbErrorWrapper } from './dbErrorWrapper';
import query from '../db';


export const getUser = dbErrorWrapper(async (email:any): Promise<QueryResult> => {    
    console.log(`email:::${email}`);
    const result =await query(
        `SELECT 
            * FROM users WHERE email=$1;`, [email]);
        console.log(`query:::${result.rows[0]}`);
    return result.rows[0];       
});

export const insertUser=dbErrorWrapper(async (userArgs:any): Promise<QueryResult> => {
    console.log(`args:::${(userArgs.email)}`);
    
    const {email,password,center}=userArgs;
    console.log(`email:::${userArgs.email}`);
    console.log(`params:::${email}${password}${center}`);
    return await query(
        `INSERT INTO users (email,password,center) VALUES ($1,$2,$3::uuid);`, [email,password,center]);
});

