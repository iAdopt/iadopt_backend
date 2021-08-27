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

export const getAnimalById = async (id: any): Promise<QueryResult<any>> => {
  try {
    const rows = await query('SELECT * FROM animals WHERE id= $1::uuid', [id]);
    return rows;
  } catch (err) {
    throw new ApiError(500, err);
  }
};

export const getAnimalsByFilter = async (species: any, age: any, gender: any, status: any, location: any): Promise<QueryResult<any>> => {
  let rows = null;
  let parameters = new Array();
  let queryGender = '';
  let queryState = '';
  let queryAge = '';
  let queryLocation = '';
  let i = 1;
  let paramQueryAge = '';

  parameters.push(species.toUpperCase());

  try {
    if (gender !== 'allGender') {
      i++;
      parameters.push(gender.toUpperCase());
      queryGender = `AND gender=$${i}`;
    }
    if (age !== 'allAge') {
      if (age === 'puppy') {
        paramQueryAge = '<12';
      }
      else {
        paramQueryAge = '>=12';
      }
    }
    if (status !== 'allStatus') {
      i++;
      parameters.push(status.toUpperCase());
      queryState = `AND status=$${i}`;
    }
    if (location !== 'allLocation') {
      i++;
      parameters.push(parseInt(location));
      queryLocation = `AND location=$${i}`;
    }

    queryAge = `AND (DATE_PART('year',CURRENT_DATE)-DATE_PART('year',birthdate))*12+(DATE_PART('month',CURRENT_DATE)-DATE_PART('month',birthdate))${paramQueryAge}`;
    rows = await query(`SELECT * FROM animals WHERE species=$1 ${queryGender} ${queryState} ${queryAge} ${queryLocation}`, [...parameters]);

    return rows;
  } catch (err) {
    throw new ApiError(500, err);
  }
};

export const getAnimalsBySpecie = async (species: any): Promise<QueryResult<any>> => {
  const rows = await query('SELECT * FROM animals WHERE species=$1', [species]);
  return rows;
};