const express =require('express');
const { Tasks } = require("../db/index");

const TaskUpdateController=(req,res)=> {
    const findTask = Tasks.find(task => task.TaskId === parseInt(req.params.TaskId));
    if (!findTask) return res.status(404).send('task not found');
    findTask.TaskName = req.body.TaskName;
    findTask.TaskPriority = req.body.TaskPriority;
    res.status(200).send(findTask);

};
module.exports={TaskUpdateController}
