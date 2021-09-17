import { QueryResult } from 'pg';
import { dbErrorWrapper } from './dbErrorWrapper';
import query from '../db';

export const getAllAnimals = dbErrorWrapper(async (): Promise<QueryResult> => {
  return await query(
    `
      SELECT 
        *,
        date_part('year', age(birthdate)) as years,
        date_part('month', age(birthdate)) as months
      FROM animals LEFT JOIN (
          SELECT DISTINCT ON (animal) animal, ENCODE(blob, 'base64') as blob FROM images
          ORDER BY animal, images."uploadedAt" desc
      ) AS most_recent_animal_image
      ON animals.id = most_recent_animal_image.animal
      ORDER BY animals."createdAt" DESC 
      `, []);
});

export const getAnimalById = dbErrorWrapper(async (id: any): Promise<QueryResult> => {
  return await query(
    `
      SELECT 
        *,
        date_part('year', age(birthdate)) as years,
        date_part('month', age(birthdate)) as months
      FROM animals
      WHERE id = $1::uuid
      ORDER BY animals."createdAt" DESC
    `, [id]);
});

export const getAnimalsBySpecies = dbErrorWrapper(async (species: any): Promise<QueryResult> => {
  return await query(
    `
      SELECT 
        *,
        date_part('year', age(birthdate)) as years,
        date_part('month', age(birthdate)) as months
      FROM animals LEFT JOIN (
        SELECT DISTINCT ON (animal) animal, ENCODE(blob, 'base64') as blob FROM images
        ORDER BY animal, images."uploadedAt" desc
      ) AS most_recent_animal_image
      ON animals.id = most_recent_animal_image.animal
      WHERE species = $1
      ORDER BY animals."createdAt" DESC
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
        date_part('year', age(birthdate)) as years,
        date_part('month', age(birthdate)) as months,
        CASE WHEN date_part('year', age(birthdate)) < 1 then 'baby' 
        else 'adult' END AS ageStatus              
      FROM animals
    ) AS A LEFT JOIN (
      SELECT DISTINCT ON (animal) animal, ENCODE(blob, 'base64') as blob FROM images
      ORDER BY animal, images."uploadedAt" desc
    ) AS most_recent_animal_image
    ON A.id = most_recent_animal_image.animal
    WHERE 
      ($1::species_enum IS NULL OR species = $1) AND
      ($2::text IS NULL OR ageStatus = $2) AND
      ($3::gender_enum IS NULL OR gender = $3) AND
      ($4::status_enum IS NULL OR status = $4) AND 
      ($5::int IS NULL OR location = $5)
    ORDER BY A."createdAt" DESC
  `;
  return await query(filterQuery, [args.species, args.age, args.gender, args.status, args.location]);
});

export const insertAnimal = dbErrorWrapper(async (args: any): Promise<QueryResult> => {
  return await query(
    `
    WITH ins0 AS (
      INSERT INTO animals (name, species, birthdate, gender, status, location, description, tags, center, vaccinated, sterilized, identified, issues)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::uuid, $10, $11, $12, $13)
          RETURNING id
    )
    INSERT INTO images (blob, animal)
    SELECT DECODE($14, 'base64'), id
    FROM ins0;
    `, [args.name, args.species, args.birthdate, args.gender, args.status, args.location, args.description, args.tags, args.center, args.vaccinated, args.sterilized, args.identified, args.issues, args.blob]);
});
