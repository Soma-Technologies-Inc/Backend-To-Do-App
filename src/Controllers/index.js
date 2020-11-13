import Tasks from "../db/index"
class createTaskController{
    static async createTask(req,res) {

        const { TaskName,TaskPriority }=req.body;
        try {
            const TaskNew = {TaskId:Tasks.length+1,TaskName,TaskPriority}         
            Tasks.push(TaskNew)
            res.status(201).send(Tasks);
            } catch (error) {
                res.send({message:'Task not created'})
             }
        }
    
}

export default createTaskController;