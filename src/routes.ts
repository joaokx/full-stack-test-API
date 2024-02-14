import { Router, RequestHandler } from 'express';
import { UserController } from './controllers/UserController';
import { TaskController } from './controllers/TaskController';
import { authMiddleware } from './middlewares/authMiddleware';

const routes = Router();
const userController = new UserController();
const taskController = new TaskController();

routes.post('/user', userController.create);
routes.post('/login', userController.login);
routes.get('/profile', authMiddleware, userController.getProfile);


routes.get('/tasks', taskController.getAllTasks);
routes.post('/tasks', taskController.createTask);
routes.put('/tasks/:id', taskController.updateTask);
routes.delete('/tasks/status', taskController.deleteTasksByStatus);
routes.delete('/tasks/:id', taskController.deleteTaskById);


export default routes;
