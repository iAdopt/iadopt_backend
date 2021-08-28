import { QueryResult } from 'pg';
//import { ApiError } from '../middlewares/errorHandler';
import { dbErrorWrapper } from './dbErrorWrapper';
import query from '../db';

export const getAllAnimals = dbErrorWrapper(async (): Promise<QueryResult<any>> => {
  const rows = await query('SELECT * FROM animals', []);
  return rows;
});

export const getAnimalById = dbErrorWrapper(async (id: any): Promise<QueryResult<any>> => {
  const rows = await query('SELECT * FROM animals WHERE id= $1::uuid', [id]);
  return rows;
});

export const getAnimalsByFilter = dbErrorWrapper(async (species: any, age: any, gender: any, status: any, location: any): Promise<QueryResult<any>> => {
  let rows = null;
  let parameters = new Array();
  let queryGender = '';
  let queryState = '';
  let queryAge = '';
  let queryLocation = '';
  let i = 1;
  let paramQueryAge = '';

  parameters.push(species.toUpperCase());

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
});

export const getAnimalsBySpecie = dbErrorWrapper(async (species: any): Promise<QueryResult<any>> => {
  const rows = await query('SELECT * FROM animals WHERE species=$1', [species.toUpperCase()]);
  return rows;
});