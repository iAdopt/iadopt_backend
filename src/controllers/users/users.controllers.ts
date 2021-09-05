import { ApiError, catchErrors } from '../../middlewares/errorHandler';
import { Request, Response } from 'express';
import { getUser, insertUser } from '../../services/users.services';
import { getCenter } from '../../services/centers.services';

const auth = require('../../services/auth.services');

export const registerUser = catchErrors(async (req: Request, res: Response): Promise<void> => {
  //trim, lowercase 
  const { email, password, center } = req.body;
  
  if (!email) {
    throw new ApiError(400, `Missing 'email'`);
  }
  if (!password) {
    throw new ApiError(400, `Missing 'password'`);
  }

  const existingUser = await getUser(email);  

  if (existingUser) {
    throw new ApiError(400, `User already exists`);
  }

  const id = getCenter(center);
  const hashedPassword = await auth.hashPassword(password);
  

  if (id=== undefined) {
    throw new ApiError(400, `Center doesn't exist`);
  }  
  
  req.body.password=hashedPassword;
  await insertUser(req.body);
  res.status(200).send({ status: `User created` });
});

export const login = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, `Missing 'email'`);
  }  
  if (!password) {
    throw new ApiError(400, `Missing 'password'`);
  }
  const user = await getUser(email);
  if (!user) {
    throw new ApiError(400, `Wrong email/password combination`);
  }
 
  const passwordMatches = await auth.comparePasswords(password, user.password);
  if (!passwordMatches) {
    throw new ApiError(400, `Wrong email/password combination`);
  }
 
  const token = auth.createToken(email);
  res.status(200).send(token);
});