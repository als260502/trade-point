import { Router } from 'express';

const routes = Router();
// routes.use('/users', usersRouter);

routes.use('/', (req, res) => {
  res.send('Hello World!');
});

export default routes;
