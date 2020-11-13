import createTaskController from "../Controllers/index";

import { Router } from "express"
const router = Router();

router.post('/task',createTaskController.createTask)

export default router;

