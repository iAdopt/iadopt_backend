import express from 'express';
import animalsRouter from './animals.routes';
import imagesRouter from './images.routes';
import usersRouter from './users.routes';

const apiRouter = express.Router();

apiRouter.use('/animals', animalsRouter);
apiRouter.use('/images', imagesRouter);
apiRouter.use('/users',usersRouter);

export default apiRouter;
