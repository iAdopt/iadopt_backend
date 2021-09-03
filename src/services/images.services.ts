import { dbErrorWrapper } from './dbErrorWrapper';
import { QueryResult } from 'pg';
import query from '../db';
import { builtinModules } from 'module';

export const insertImage = dbErrorWrapper(async (blob: any, animal: any): Promise<QueryResult> => {

  return await query(
    `
    INSERT INTO images (blob, animal)
    VALUES ($1, $2);
    `, [blob, animal]
  );
});

export const getAnimalImages = dbErrorWrapper(async (animal: any): Promise<QueryResult> => {
  return await query(
    `
    SELECT decode(blob,'base64')      
    FROM images
    WHERE animal = $1::uuid
    `, [animal]
  );
});


const addRouterToApp=(app:any)=>{
  app.post('insertImage',insertImage);
};

module.exports={
  addRouterToApp,
};