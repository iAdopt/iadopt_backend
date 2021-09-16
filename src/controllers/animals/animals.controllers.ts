import { validate as uuidValidate } from 'uuid';
import { Request, Response } from 'express';
import { ApiError, catchErrors } from '../../middlewares/errorHandler';
import {
  getAllAnimals,
  getAnimalById,
  getAnimalsByFilter,
  getAnimalsBySpecies, insertAnimal
} from '../../services/animals.services';

import { validFilterValues, checkFilterValues, NUMBER_OF_REGIONS } from './checkFilterValues';
import { randomInt } from '../../utils/random';

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

  const animals = await getAnimalsBySpecies(species);
  res.send(animals.rows);
});

export const byFilter = catchErrors(async (req: Request, res: Response): Promise<void> => {
  let params: { [key: string]: string } = { };
  Object.entries(validFilterValues).forEach(([key, _]) => {
    params = { ...params, ...checkFilterValues(key, req.body[key]) };
  });

  const animals = await getAnimalsByFilter({ ...params });
  res.send(animals.rows);
});

export const uploadAnimal = catchErrors(async (req: Request, res: Response): Promise<void> => {
  let { vaccinated, sterilized, identified, location } = req.body;
  location = location || randomInt(0, NUMBER_OF_REGIONS);
  vaccinated = vaccinated === undefined || vaccinated === '0';
  sterilized = sterilized === undefined || sterilized === '0';
  identified = identified === undefined || identified === '0';

  const body = { ...req.body, vaccinated, sterilized, identified, location };
  const result = await insertAnimal(body);
  res.send(result);
});
