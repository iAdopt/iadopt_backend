import { validate as uuidValidate } from 'uuid';
import { Request, Response } from 'express';
import { ApiError, catchErrors } from '../middlewares/errorHandler';
import { getAllAnimals, getAnimalById, getAnimalsBySpecie, getAnimalsByFilter } from '../services/animals.services';

export const all = catchErrors(async (req: Request, res: Response): Promise<void> => {
  debugger;
  const animals = await getAllAnimals();

  //console.log(`animals.row ${animals.rows}`);
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

export const byFilter = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const { species, age, gender, status, location } = req.query;
  
  if (!species) {
    throw new ApiError(400, `Missing required 'specie'`);
  }
  if (species !== 'cat' && species !== 'dog') {
    throw new ApiError(400, `Incorrect specie ${species}`);
  }
  if (!age) {
    throw new ApiError(400, `Missing required 'age'`);
  }
  if (age !== 'adult' && age !== 'puppy' && age !== 'allAge') {
    throw new ApiError(400, `Incorrect 'age' ${age}`);
  }
  if (!gender) {
    throw new ApiError(400, `Missing required 'gender'`);
  }
  if (gender !== 'female' && gender !== 'male' && gender !== 'allGender') {
    throw new ApiError(400, `Incorrect 'gender' ${gender}`);
  }
  if (!status) {
    throw new ApiError(400, `Missing required 'state'`);
  }
  if (status !== 'urgent' && status !== 'new' && status !== 'allStatus') {
    throw new ApiError(400, `Incorrect 'state' ${status}`);
  }
  if (!location) {
    throw new ApiError(400, `Missing required 'location'`);
  }
  if(location!=='allLocation' && !Number(location)){
    throw new ApiError(400, `Incorrect 'location' ${location}`);
  }

  const animalsByFilter = await getAnimalsByFilter(species, age, gender, status, location);
  res.send(animalsByFilter.rows);
});
