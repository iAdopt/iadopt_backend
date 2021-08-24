import User from "../models/user.model";

export const getAllUsers = async (): Promise<any> => {};

export const getUserById = async (id: String): Promise<any> => {};

export const createUser = async (body: any): Promise<any> => {
  const { firstName, lastName, type } = body;

  const newUser = new User({ firstName, lastName, type });

  newUser.save().then(() => {
    return newUser;
  });
};
