import { QueryResult } from 'pg';
import { dbErrorWrapper } from './dbErrorWrapper';
import query from '../db';

export const getAllAnimals = dbErrorWrapper(async (): Promise<QueryResult> => {
  return await query('SELECT * FROM animals', []);
});

export const getAnimalById = dbErrorWrapper(async (id: any): Promise<QueryResult> => {
  return await query('SELECT * FROM animals WHERE id= $1::uuid', [id]);
});

export const getAnimalsBySpecie = dbErrorWrapper(async (specie: any): Promise<QueryResult> => {
  return await query('SELECT * FROM animals WHERE specie=$1', [specie]);
});

interface filterArgs {
  specie: string;
  age: string;
  gender: string;
  status: string,
  location: number;
}

export const getAnimalsByFilter = dbErrorWrapper(async (args: filterArgs): Promise<QueryResult> => {
  const filterQuery = `
    SELECT 
        * 
    FROM (
        SELECT 
            *,
            CASE WHEN date_part('year', age(birthdate)) < 1 then 'puppy' 
            else 'adult' END AS age              
        FROM animals
    ) AS A
    WHERE 
        ($1::specie_enum IS NULL OR specie = $1) AND
        ($2::text IS NULL OR age = $2) AND
        ($3::gender_enum IS NULL OR gender = $3) AND
        ($4::status_enum IS NULL OR status = $4) AND 
        ($5::int IS NULL OR location = $5)
  `;
  return await query(filterQuery, [args.specie, args.age, args.gender, args.status, args.location]);
});
