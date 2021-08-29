import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import config from 'config';
import apiRouter from './routes/index';
import { errorHandleMiddleware } from './middlewares/errorHandler';
import schema from './graphql';

const app = express();
app.use(helmet(config.get('helmetConfig')));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// API
app.use('/api', apiRouter);
app.use(errorHandleMiddleware);

// GraphQL
app.use(
  '/graphql',
  graphqlHTTP(() => ({
    schema,
    graphiql: true
  }))
);

app.listen(8080, () => {
  console.log('Server running on port http://localhost:8080');
});
