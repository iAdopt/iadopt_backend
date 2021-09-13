import { dbErrorWrapper } from './dbErrorWrapper';
import { QueryResult } from 'pg';
import query from '../db';

export const insertImage = dbErrorWrapper(async (blob: any, animal: any): Promise<QueryResult> => {
  return await query(
    `
    INSERT INTO images (blob, animal)
    VALUES ($1, $2);
    `, [blob, animal]
  );
});

export const existImageByAnimal = dbErrorWrapper(async (animal: any, blob: any): Promise<QueryResult> => {
  return await query(
    `
    SELECT *
    FROM images
    WHERE animal = $1::uuid AND blob = $2
  `, [animal, blob]
  );
});

export const getAnimalImages = dbErrorWrapper(async (animal: any): Promise<QueryResult> => {
  return await query(
    `
    SELECT *     
    FROM images
    WHERE animal = $1::uuid
    `, [animal]
  );
});
