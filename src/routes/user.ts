import express from 'express';
import * as user from '../controllers/user.controller';

const apiRouter = express.Router();

apiRouter
  .get('/', user.onGetAllUsers)
  .post('/', user.onCreateUser)
  .get('/:id', user.onGetUserById)
  .delete('/:id', user.onDeleteUserById);

export default apiRouter;
