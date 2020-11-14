import taskController from '../Controllers/index'

import { Router } from "express";
const router = Router();

router.delete('/task/:TaskId', taskController.deleteTask);
router.post('/task',taskController.createTask);
router.get('/task',taskController.findTask);

export default router;


