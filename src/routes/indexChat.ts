import express from 'express';
// import users from '../controllers/user.controller';
// import { encode } from '../middlewares/jwt.js';

const apiRouter = express.Router();

// apiRouter.post(
//   '/login/:userId',
//   encode,
//   (req: Request, res: Response, next: any) => {}
// );

apiRouter.post('/login/:userId');

export default apiRouter;
