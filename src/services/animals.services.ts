import { QueryResult } from 'pg';
import { ApiError } from '../middlewares/errorHandler';
import { dbErrorWrapper } from './dbErrorWrapper';
import query from '../db';

export const getAllAnimals = dbErrorWrapper(async (): Promise<QueryResult<any>> => {
  const rows = await query('SELECT * FROM animals', []);
  return rows;
});

export const getAnimalById = dbErrorWrapper(async (id: any): Promise<QueryResult<any>> => {
  try {
    const rows = await query('SELECT * FROM animals WHERE id= $1::uuid', [id]);
    return rows;
  } catch (err) {
    throw new ApiError(500, err);
  }
});

export const getAnimalsBySpecie = dbErrorWrapper(async (specie: any): Promise<QueryResult<any>> => {
  const rows = await query('SELECT * FROM animals WHERE specie=$1', [specie]);
  return rows;
});
