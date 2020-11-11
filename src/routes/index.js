import express from "express";
import createTaskController from "../Controllers/index";
import {Router} from "express"
const router=Router();

router.post('/api/create',createTaskController.createTask)

export default router;

