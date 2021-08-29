import { validate as uuidValidate } from 'uuid';
import { Request, Response } from 'express';
import { ApiError, catchErrors } from '../middlewares/errorHandler';
import { getAllAnimals, getAnimalById, getAnimalsByFilter, getAnimalsBySpecie } from '../services/animals.services';

const NUMBER_OF_REGIONS = 41;

export const all = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const animals = await getAllAnimals();
  res.send(animals.rows);
});

export const byId = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const id = req.params.Id;
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
    throw new ApiError(400, 'Missing required "specie"');
  }
  const animalsBySpecie = await getAnimalsBySpecie(specie);
  res.send(animalsBySpecie.rows);
});

export const byFilter = catchErrors(async (req: Request, res: Response): Promise<void> => {
  let params: { [key: string]: string } = { };
  Object.entries(validFilterValues).forEach(([key, _]) => {
    params = { ...params, ...checkFilterValues(key, req.query[key]) };
  });
  const filteredAnimals = await getAnimalsByFilter({ ...params });
  res.send(filteredAnimals.rows);
});

const validFilterValues: { [key: string]: any[] } = {
  specie: ['cat', 'dog', undefined],
  age: ['puppy', 'adult', undefined],
  gender: ['female', 'male', undefined],
  status: ['urgent', 'new', undefined],
  location: [...Array.from(
    { length: NUMBER_OF_REGIONS },
    (_, i) => i + 1).map(element => element.toString()
  ), undefined]
};

const checkFilterValues = (key: string, value: any): any => {
  if (!(validFilterValues[key].includes(value))) {
    throw new ApiError(400, `Invalid ${key}.`);
  }
  return { [key]: value || null };
};
