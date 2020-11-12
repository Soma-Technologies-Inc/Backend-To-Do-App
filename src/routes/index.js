import createTaskController from "../Controllers/index";

import { Router } from "express"
const router = Router();

router.post('/task',createTaskController.createTask)
router.delete('/task/:id', createTaskController.deleteTask);

export default router;

