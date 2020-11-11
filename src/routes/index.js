import express from 'express';
import getter from '../Controllers/index';

const router = express.Router();
router.get('/Tasks/:id',getter.getTaskbyId);
router.get('/Tasks/priority/:priority',getter.getByPriority);
router.post('/Tasks',getter.createTask);

export default router;

