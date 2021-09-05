import { ApiError, catchErrors } from '../../middlewares/errorHandler';
import { Request, Response } from 'express';
import { getUser, insertUser } from '../../services/users.services';
import { getCenter } from '../../services/centers.services';

const auth = require('../../services/auth.services');

export const registerUser = catchErrors(async (req: Request, res: Response): Promise<void> => {
  //trim, lowercase
  console.log(`req.body:::${req.body.email}`);
  const { email, password, center } = req.body;
  if (!email) {
    throw new ApiError(400, `Missing 'email'`);
  }
  if (!password) {
    throw new ApiError(400, `Missing 'password'`);
  }

  const existingUser = await getUser(email);
  console.log(`existingUser.rows ${existingUser}`);

  if (existingUser) {
    throw new ApiError(400, `User already exists`);
  }

  const id = getCenter(center);
  const hashedPassword = await auth.hashPassword(password);
  console.log(`hashedPasswotd:::${hashedPassword}`);
  console.log(`existingCenter ${id}`);


  if (id=== undefined) {
    throw new ApiError(400, `Center doesn't exist`);
  }
  console.log(`user controller:::${email},${hashedPassword},${center}`);
  
  req.body.password=hashedPassword;
  await insertUser(req.body);
  res.status(200).send({ status: `User created` });
});

export const login = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, `Missing 'email'`);
  }
  const user = getUser(email, password);
  if (!user) {
    throw new ApiError(400, `Wrong email/password combination`);
  }
  if (!password) {
    throw new ApiError(400, `Missing 'password'`);
  }
  const passwordMatches = await auth.comparePasswords(password, user);
  if (!passwordMatches) {
    throw new ApiError(400, `Wrong email/password combination`);
  }
  const token = auth.createToken(email);
  res.status(200).send(token);
});