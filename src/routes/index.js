import taskController from '../Controllers/index'

import { Router } from "express";
const router = Router();

router.get('/task', taskController.getAllTasks);
router.get('/',taskController.rootPath);
router.delete('/task/:TaskId', taskController.deleteTask);
router.delete('/task', taskController.deleteAllTasks);
router.post('/task',taskController.createTask);
router.get('/task/:TaskId',taskController.findTask);
router.get('/task/priority/:TaskPriority', taskController.getByPriority);
router.put('/task/:TaskId',taskController.UpdateTask)



export default router;


