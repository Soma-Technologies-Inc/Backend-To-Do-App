const express=require('express');
const {TaskModel}=require('../db/index')
const CreateTaskController=(req,res)=>{
const{TaskName,TaskPriority}=req.body
const TaskNew={
TaskId:TaskModel.length+1,
TaskName,
TaskPriority   
}
TaskModel.push(TaskNew)
res.status(201).send(TaskModel)
}
module.exports.CreateTaskController=CreateTaskController;