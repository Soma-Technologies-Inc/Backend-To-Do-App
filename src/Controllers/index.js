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
    static async deleteTask(req,res){
        const taskToDelete = Tasks.find(task => task.id === parseInt(req.params.id))
        if(!taskToDelete) 
        return res.status(404).json('There is no task to deleted.');
        const index = Tasks.indexOf(taskToDelete);
        Tasks.splice(index,1);
        res.status(200).json(`task successfully deleted`);
        }
    
}
export default createTaskController;
