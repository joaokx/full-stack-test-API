import 'express-async-errors';
import express from 'express';
import cors, { CorsOptions } from 'cors';
import { AppDataSource } from './data-source';
import { errorMiddleware } from './middlewares/error';
import routes from './routes';

const corsOptions: CorsOptions = {
  origin: ['http://localhost:5173', 'http://192.168.0.33:3000', 'https://full-stack-test-nine.vercel.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['Content-Type', 'Authorization'],
};




AppDataSource.initialize().then(() => {
  const app = express();

  app.use(cors(corsOptions));

  app.use(express.json());
  app.use(routes);
  app.use(errorMiddleware);

  return app.listen(process.env.PORT);
});
