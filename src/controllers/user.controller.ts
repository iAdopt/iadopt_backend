import { validate as uuidValidate } from "uuid";
import { ApiError, catchErrors } from "../middlewares/errorHandler";
import { Request, Response } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
} from "../services/user.services";

export const onGetAllUsers = catchErrors(
  async (req: Request, res: Response): Promise<void> => {
    const users = await getAllUsers();
    res.send(users.rows);
  }
);

export const onGetUserById = catchErrors(
  async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;

    if (typeof id !== "string") {
      throw new ApiError(400, "Missing requiered Id.");
    }

    if (!uuidValidate(id)) {
      throw new ApiError(400, "Specified Id is not a valid uuid");
    }

    const users = await getUserById(id);
    res.send(users.rows[0]);
  }
);

export const onCreateUser = catchErrors(
  async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await createUser(req.body);
      res.status(200).json({ success: true, user });
    } catch (error) {
      res.status(500).json({ success: false, error: error });
    }
  }
);

export const onDeleteUserById = catchErrors(
  async (req: Request, res: Response): Promise<void> => {}
);
