import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import apiRouter from './routes/index';
import { errorHandleMiddleware } from './middlewares/errorHandler';

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', apiRouter);

app.use(errorHandleMiddleware);

app.listen(8080, () => {
  console.log('Server running on port http://localhost:8080');
});
