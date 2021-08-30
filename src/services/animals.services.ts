import { QueryResult } from 'pg';
import { dbErrorWrapper } from './dbErrorWrapper';
import query from '../db';

export const getAllAnimals = dbErrorWrapper(async (): Promise<QueryResult> => {
  return await query(
    `
        SELECT 
            *,
            date_part('year', age(birthdate)) as age
        FROM animals
        `, []);
});

export const getAnimalById = dbErrorWrapper(async (id: any): Promise<QueryResult> => {
  return await query(
    `
        SELECT 
            *,
            date_part('year', age(birthdate)) as age
        FROM animals
        WHERE id = $1::uuid
        `, [id]);
});

export const getAnimalsBySpecies = dbErrorWrapper(async (species: any): Promise<QueryResult> => {
  return await query(
    `
        SELECT 
            *,
            date_part('year', age(birthdate)) as age
        FROM animals
        WHERE species = $1
        `, [species]);
});

interface filterArgs {
  species: string;
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
            date_part('year', age(birthdate)) as age,
            CASE WHEN date_part('year', age(birthdate)) < 1 then 'baby' 
            else 'adult' END AS ageStatus              
        FROM animals
    ) AS A
    WHERE 
        ($1::species_enum IS NULL OR species = $1) AND
        ($2::text IS NULL OR ageStatus = $2) AND
        ($3::gender_enum IS NULL OR gender = $3) AND
        ($4::status_enum IS NULL OR status = $4) AND 
        ($5::int IS NULL OR location = $5)
  `;
  return await query(filterQuery, [args.species, args.age, args.gender, args.status, args.location]);
});
