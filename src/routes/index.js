const express=require('express');
const {CreateTaskController} = require('../Controllers/index');
const router=express.Router();
router.post('/create/api/task',CreateTaskController)
module.exports=router;