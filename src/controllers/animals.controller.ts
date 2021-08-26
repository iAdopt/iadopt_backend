import { validate as uuidValidate } from 'uuid';
import { Request, Response } from 'express';
import { ApiError, catchErrors } from '../middlewares/errorHandler';
import { getAllAnimals, getAnimalById, getAnimalsBySpecie, getAnimalsByFilter } from '../services/animals.services';

export const all = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const animals = await getAllAnimals();

  res.send(animals.rows);
});

export const byId = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const id = req.params.Id;
  console.log(id);

  if (typeof id !== 'string') {
    throw new ApiError(400, 'Missing requiered Id.');
  }

  if (!uuidValidate(id)) {
    throw new ApiError(400, 'Specified Id is not a valid uuid');
  }
  const animals = await getAnimalById(id);

  if (!animals.rows.length) {
    throw new ApiError(400, 'No animal corresponds to the given uuid');
  }

  res.send(animals.rows[0]);
});

export const bySpecie = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const specie = req.params.specie;

  if (!specie) {
    throw new ApiError(400, `Missing required 'specie'`);
  }

  const animalsBySpecie = await getAnimalsBySpecie(specie);
  res.send(animalsBySpecie.rows);
});

/*export const byGender = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const gender = req.params.gender;
  //const animalsByGender = await getAnimalsByGender(gender);
  res.send(animalsByGender.rows);
});*/

export const byFilter = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const { specie, age, gender, state, location } = req.query;
  
  if (!specie) {
    throw new ApiError(400, `Missing required 'specie'`);
  }
  if (specie !== 'CAT' && specie !== 'DOG') {
    throw new ApiError(400, `Incorrect specie ${specie}`);
  }
  if (!age) {
    throw new ApiError(400, `Missing required 'age'`);
  }
  if (age !== 'ADULT' && age !== 'PUPPY' && age !== 'allAge') {
    throw new ApiError(400, `Incorrect 'age' ${age}`);
  }
  if (!gender) {
    throw new ApiError(400, `Missing required 'gender'`);
  }
  if (gender !== 'FEMALE' && gender !== 'MALE' && gender !== 'allGender') {
    throw new ApiError(400, `Incorrect 'gender' ${gender}`);
  }
  if (!state) {
    throw new ApiError(400, `Missing required 'state'`);
  }
  if (state !== 'URGENT' && state !== 'NEW' && state !== 'allStatus') {
    throw new ApiError(400, `Incorrect 'state' ${state}`);
  }
  if (!location) {
    throw new ApiError(400, `Missing required 'location'`);
  }
  if(location!=='allLocation' && !Number(location)){
    throw new ApiError(400, `Incorrect 'location' ${location}`);
  }

  const animalsByFilter = await getAnimalsByFilter(specie, age, gender, state, location);
  res.send(animalsByFilter.rows);
});
