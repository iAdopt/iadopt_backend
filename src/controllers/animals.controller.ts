import { validate as uuidValidate } from "uuid";
import { Request, Response } from "express";
import { ApiError, catchErrors } from "../middlewares/errorHandler";
import {
  getAllAnimals,
  getAnimalById,
  getAnimalsBySpecie,
} from "../services/animals.services";

<<<<<<< HEAD
export const all = catchErrors(
  async (req: Request, res: Response): Promise<void> => {
    const animals = await getAllAnimals();
    res.send(animals.rows);
  }
);
debugger;
export const byId = catchErrors(
  async (req: Request, res: Response): Promise<void> => {
    const id = req.params.animal;
=======
export const all = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const animals = await getAllAnimals();
  res.send(animals.rows);
});

export const byId = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const id = req.params.Id;
  console.log(id);
>>>>>>> origin/eslint-setup

    if (typeof id !== "string") {
      throw new ApiError(400, "Missing requiered Id.");
    }

    if (!uuidValidate(id)) {
      throw new ApiError(400, "Specified Id is not a valid uuid");
    }

<<<<<<< HEAD
    const animals = await getAnimalById(id);
    res.send(animals.rows[0]);
  }
);

export const bySpecie = catchErrors(
  async (req: Request, res: Response): Promise<void> => {
    const specie = req.params.specie;
    const animalsBySpecie = await getAnimalsBySpecie(specie);
    res.send(animalsBySpecie.rows);
  }
);
=======
  const animals = await getAnimalById(id);

  if (!animals.rows.length) {
    throw new ApiError(400, 'No animal corresponds to the given uuid');
  }

  res.send(animals.rows[0]);
});

export const bySpecie = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const specie = req.params.specie;
  const animalsBySpecie = await getAnimalsBySpecie(specie);
  res.send(animalsBySpecie.rows);
});
>>>>>>> origin/eslint-setup
