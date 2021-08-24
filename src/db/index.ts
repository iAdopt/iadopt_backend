import { Pool, QueryResult } from 'pg'
import config from 'config'

const pool = new Pool(config.get('db'))

export default (text: string, params: any[]): Promise<QueryResult<any>> => pool.query(text, params)
