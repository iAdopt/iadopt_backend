import { validate as uuidValidate } from 'uuid';
import { Request, Response } from 'express';
import { ApiError, catchErrors } from '../middlewares/errorHandler';
import {
  getAllAnimals,
  getAnimalById,
  getAnimalsByFilter,
  getAnimalsBySpecies,
  insertImage
} from '../services/animals.services';

const NUMBER_OF_REGIONS = 41;

export const all = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const animals = await getAllAnimals();
  res.send(animals.rows);
});

export const byId = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const id = req.params.Id;
  if (typeof id !== 'string') {
    throw new ApiError(400, 'Missing required Id.');
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

export const bySpecies = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const species = req.params.species;
  if (!species) {
    throw new ApiError(400, 'Missing required "species"');
  }
  const animalsBySpecies = await getAnimalsBySpecies(species);
  res.send(animalsBySpecies.rows);
});

export const byFilter = catchErrors(async (req: Request, res: Response): Promise<void> => {
  let params: { [key: string]: string } = { };
  Object.entries(validFilterValues).forEach(([key, _]) => {
    params = { ...params, ...checkFilterValues(key, req.body[key]) };
  });
  const filteredAnimals = await getAnimalsByFilter({ ...params });
  res.send(filteredAnimals.rows);
});

const validFilterValues: { [key: string]: string[] } = {
  species: ['cat', 'dog', '', undefined],
  age: ['baby', 'adult', '', undefined],
  gender: ['female', 'male', '', undefined],
  status: ['urgent', 'new', '', undefined],
  location: [...Array.from(
    { length: NUMBER_OF_REGIONS },
    (_, i) => i + 1).map(element => element.toString().padStart(2, '0')
  ), '', undefined]
};

const checkFilterValues = (key: string, value: any): any => {
  if (!(validFilterValues[key].includes(value))) {
    throw new ApiError(400, `Invalid ${key}.`);
  }
  return { [key]: value || null };
};

export const uploadImage = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const { blob, animal } = req.body;
  await insertImage(blob, animal);
  res.status(200).send('OK');
});
