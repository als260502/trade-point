import 'reflect-metadata';
import 'dotenv/config';

import express, { Response, Request, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import morgan from 'morgan';
import helmet from 'helmet';
/*
import uploadConfig from '@config/upload';
*/
import AppError from '@shared/errors/AppError';

import routes from './routes';
import '@shared/infra/typeorm';

// import '@shared/container';
// import rateLimiter from './middlewares/rateLimiter';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('common'));
app.use(express.json());
// app.use('/files', express.static(uploadConfig.uploadsFolder));
// app.use(rateLimiter);

app.use(routes);

app.use(errors());

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  // eslint-disable-next-line no-console
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});
const PORT = process.env.PORT || 3335;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server started on port ${PORT}`);
});
