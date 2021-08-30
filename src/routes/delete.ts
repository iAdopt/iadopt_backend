import express from 'express';
import * as controller from '../controllers/delete.controller';

const apiRouter = express.Router();

apiRouter
  .delete('/room/:id', controller.deleteRoomById)
  .delete('/message/:id', controller.deleteMessageById);

export default apiRouter;
