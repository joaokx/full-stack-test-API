import { Request, Response } from 'express';
import { taskRepository } from '../repositories/taskRepository';

export class TaskController {
    async getAllTasks(req: Request, res: Response) {
        try {
            const tasks = await taskRepository.find();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async createTask(req: Request, res: Response) {
        try {
            const newTask = taskRepository.create(req.body);
            const result = await taskRepository.save(newTask);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async updateTask(req: Request, res: Response) {
        try {
            const taskId = parseInt(req.params.id); // Convertendo para número, se necessário
            const task = await taskRepository.findOneOrFail({ where: { id: taskId } });
            taskRepository.merge(task, req.body);
            const result = await taskRepository.save(task);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async deleteTaskById(req: Request, res: Response) {
        try {
            const taskId = parseInt(req.params.id);
            const deletedTask = await taskRepository.delete(taskId);
            if (deletedTask.affected === 0) {
                return res.status(404).json({ message: 'Tarefa não encontrada' });
            }
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    async deleteTasksByStatus(req: Request, res: Response) {
        try {
            const status = req.query.status as string; // Get the status from the query parameters
            const result = await taskRepository.delete({ status: status }); // Delete tasks with the given status
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
}
