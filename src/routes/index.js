const express = require('express');

const {TaskUpdateController} = require('../Controllers/index');
const router=express.Router();

router.put('/api/task/:TaskId' ,TaskUpdateController)

module.exports = router;
