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
<<<<<<< HEAD
  return await query('SELECT * FROM animals WHERE specie=$1', [specie]);
});

export const getAnimalsByFilter = dbErrorWrapper(async (specie: string, isPuppy: boolean, gender: string, status: string, location: number): Promise<QueryResult> => {
  const filterQuery = `
    SELECT 
        * ,
        case when calculated age < 1 then true
            else false as isPuppy
    FROM (
        SELECT 
            *,
            date_part('year', age(birthdate)) as age    
        FROM animals
    )
    WHERE 
        ($1 IS NULL OR species = $1) AND
        ($2 IS NULL OR gender = $2) AND
        ($3 IS NULL OR isPuppy = $3) AND
        ($4 IS NULL OR location = $4)
  `;
  return await query(filterQuery, [specie, isPuppy, gender, status, location]);
=======
  return await query('SELECT * FROM animals WHERE species=$1', [specie]);
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
        ($1::species_enum IS NULL OR species = $1) AND
        ($2::text IS NULL OR age = $2) AND
        ($3::gender_enum IS NULL OR gender = $3) AND
        ($4::status_enum IS NULL OR status = $4) AND 
        ($5::int IS NULL OR location = $5)
  `;
  return await query(filterQuery, [args.specie, args.age, args.gender, args.status, args.location]);
>>>>>>> master
});
