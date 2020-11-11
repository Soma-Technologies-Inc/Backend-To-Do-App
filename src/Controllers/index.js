import TaskModel from "../db/index"
class createTaskController{
static async createTask(req,res){
const {TaskName,TaskPriority}=req.body;
    try {
    const TaskNew={TaskId:TaskModel.length+1,TaskName,TaskPriority}         
    TaskModel.push(TaskNew)
    res.status(201).send(TaskModel);
    } catch (error) {
        res.send({message:'Task not created'})
     }
}
}
export default createTaskController;