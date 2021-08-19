/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryResult } from 'pg';
import { ApiError } from '../middlewares/errorHandler';
import query from '../db';

export const getAllAnimals = async (): Promise<QueryResult<any>> => {
  const rows = await query('SELECT * FROM animals', []);
  return rows;
};

export const getAnimalById = async (id: any): Promise<QueryResult<any>> => {
  try {
    console.log(`id getAnimalById ${id}`);
    const rows = await query('SELECT * FROM animals WHERE id= $1::uuid', [id]);
    return rows;
  } catch (err) {
    console.log(err);
    throw new ApiError(500, err);
  }
};

export const getAnimalsBySpecie = async (specie:any): Promise<QueryResult<any>>=>{
  const rows = await query ('SELECT * FROM animals WHERE specie=$1',[specie]);
  return rows;
}
