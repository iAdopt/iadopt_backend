import { ApiError, catchErrors } from '../../middlewares/errorHandler';
import { Request, Response } from 'express';
import { getCenterByEmail, insertCenter } from '../../services/centers.services';
import { comparePasswords, createToken, hashPassword } from '../../services/auth.services';

export const registerCenter = catchErrors(async (req: Request, res: Response): Promise<void> => {
  // trim, lowercase
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, 'Missing email');
  }
  if (!password) {
    throw new ApiError(400, 'Missing password');
  }

  const centerExist = (await getCenterByEmail(email)).rows.length;

  if (centerExist) {
    throw new ApiError(400, 'Center already exists');
  }

  const hashedPassword = await hashPassword(password);

  await insertCenter({ ...req.body, password: hashedPassword });
  res.status(200).send({ status: 'User created' });
});

export const login = catchErrors(async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, 'Missing email');
  }
  if (!password) {
    throw new ApiError(400, 'Missing password');
  }
  const centerQuery = await getCenterByEmail(email);

  if (!centerQuery.rows.length) {
    throw new ApiError(400, 'Center not registered into the database');
  }

  const center = centerQuery.rows[0];
  const passwordMatches = await comparePasswords(password, center.password.toString());
  if (!passwordMatches) {
    throw new ApiError(400, 'Wrong email/password combination');
  }

  const token = createToken(email);
  res.status(200).send(token);
});
