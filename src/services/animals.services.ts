import { QueryResult } from 'pg';
import { dbErrorWrapper } from './dbErrorWrapper';
import query from '../db';

export const getAllAnimals = dbErrorWrapper(async (): Promise<QueryResult> => {
  return await query(
    `
      SELECT 
        *,
        date_part('year', age(birthdate)) as age
      FROM animals LEFT JOIN (
          SELECT DISTINCT ON (animal) * FROM images
          ORDER BY animal, images."uploadedAt" desc
      ) AS most_recent_animal_image
      ON animals.id = most_recent_animal_image.animal
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
      FROM animals LEFT JOIN (
        SELECT DISTINCT ON (animal) * FROM images
        ORDER BY animal, images."uploadedAt" desc
      ) AS most_recent_animal_image
      ON animals.id = most_recent_animal_image.animal
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
    ) AS A LEFT JOIN (
      SELECT DISTINCT ON (animal) * FROM images
      ORDER BY animal, images."uploadedAt" desc
    ) AS most_recent_animal_image
    ON A.id = most_recent_animal_image.animal
    WHERE 
      ($1::species_enum IS NULL OR species = $1) AND
      ($2::text IS NULL OR ageStatus = $2) AND
      ($3::gender_enum IS NULL OR gender = $3) AND
      ($4::status_enum IS NULL OR status = $4) AND 
      ($5::int IS NULL OR location = $5)
  `;
  return await query(filterQuery, [args.species, args.age, args.gender, args.status, args.location]);
});

export const insertAnimal = dbErrorWrapper(async (args: any): Promise<QueryResult> => {
  return await query(
    `
    INSERT INTO animals (name, species, birthdate, gender, status, location, description, tags, center)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::uuid);
    `, [args.name, args.species, args.age, args.gender, args.status, args.location, args.description, args.tags, args.center]);
});
