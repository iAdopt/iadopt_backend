import path from 'path';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config({ path: path.join(__dirname, '/../../.env') });

export const hashPassword = async (password: any) => {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(password, salt);
};

export const comparePasswords = async (password: any, dbPassword: any) => {
  return await bcrypt.compare(password, dbPassword);
};

export const createToken = (email: any) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION_TIME
  });
  return {
    accessToken: token,
    tokenType: 'Bearer',
    expiresIn: '2h'
  };
};
