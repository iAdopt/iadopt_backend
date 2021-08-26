import { QueryResult } from 'pg';
import { ApiError } from '../middlewares/errorHandler';
//import { dbErrorWrapper } from './dbErrorWrapper';
import query from '../db';

export const getAllAnimals = async (): Promise<QueryResult<any>> => {
  try {
    const rows = await query('SELECT * FROM animals', []);
    return rows;
  } catch (err) {
    console.log(err);
    throw new ApiError(500, err);
  }
};
/*export const getAllAnimals = dbErrorWrapper(async (): Promise<QueryResult<any>> => {
  const rows = await query('SELECT * FROM animals', []);
  return rows;
});*/

export const getAnimalById = async (id: any): Promise<QueryResult<any>> => {
  try {
    const rows = await query('SELECT * FROM animals WHERE id= $1::uuid', [id]);
    return rows;
  } catch (err) {
    throw new ApiError(500, err);
  }
};


/*Not implemented*/
/*export const getAnimalsBySpecie = async (specie: any): Promise<QueryResult<any>> => {
  const rows = await query('SELECT * FROM animals WHERE specie=$1', [specie]);
  return rows;
};*/

/*Not implemented*/
/*export const getAnimalsByGender = async (gender: any): Promise<QueryResult<any>> => {
  const rows = await query('SELECT * FROM animals WHERE gender=$1', [gender]);
  console.log(rows);
  return rows;
}*/


export const getAnimalsByFilter = async (specie: any, age: any, gender: any, state: any, location: any): Promise<QueryResult<any>> => {
  let rows = null;
  let parameters = new Array();
  let queryGender = '';
  let queryState = '';
  let queryAge = '';
  let queryLocation = '';
  let i = 1;
  let paramQueryAge = '';

  parameters.push(specie);

  try {
    /*if (gender === 'allGender' && status === 'allStatus' && age === 'allAge' && location == 'allLocation') {
      rows = await query('SELECT * FROM animals WHERE specie=$1', [specie]);
    } else {*/
    if (gender !== 'allGender') {
      i++;
      parameters.push(gender);
      queryGender = `AND gender=$${i}`;
    }
    if (age !== 'allAge') {
      if (age === 'PUPPY') {
        paramQueryAge = '<12';
      }
      else {
        paramQueryAge = '>=12';
      }
      //queryAge = `AND (DATE_PART('year',CURRENT_DATE)-DATE_PART('year',birthdate))*12+(DATE_PART('month',CURRENT_DATE)-DATE_PART('month',birthdate))>=12`;
    }
    if (state !== 'allStatus') {
      i++;
      parameters.push(state);
      queryState = `AND status=$${i}`;
    }
    if (location !== 'allLocation') {
      i++;
      parameters.push(parseInt(location));
      queryLocation = `AND location=$${i}`;
    }

    queryAge = `AND (DATE_PART('year',CURRENT_DATE)-DATE_PART('year',birthdate))*12+(DATE_PART('month',CURRENT_DATE)-DATE_PART('month',birthdate))${paramQueryAge}`;
    rows = await query(`SELECT * FROM animals WHERE specie=$1 ${queryGender} ${queryState} ${queryAge} ${queryLocation}`, [...parameters]);
    //}
    return rows;
  } catch (err) {
    throw new ApiError(500, err);
  }
};

export const getAnimalsBySpecie = async (specie: any): Promise<QueryResult<any>> => {
  const rows = await query('SELECT * FROM animals WHERE specie=$1', [specie]);
  return rows;
};