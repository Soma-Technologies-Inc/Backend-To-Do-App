import Tasks from "../db/index";
class taskController{
    static async findTask(req,res) {
        try {
            const findById = Tasks.find(task => task.TaskId === parseInt(req.query.TaskId));
            if(!findById)res.status(404).json({
                status_code: 404,
                message: 'Task was nowhere to be found'
            })
            res.status(200).json({
                status: 200,
                found_task: [findById]
            });
            } catch (error) {
                res.send({
                    message:'Fatal error found',
                    error: error
                })
            }
        }
        static async createTask(req,res) {

            const { TaskName,TaskPriority }= req.body;
            try {
                const TaskNew = {TaskId:Tasks.length+1,TaskName,TaskPriority}
                Tasks.push(TaskNew)
                res.status(201).send({
                    status: 201,
                    data: [Tasks]
                });
                }
            catch (error) {
                res.send({
                    message:'Fatal error found',
                    error: error
                })
            }
        }
    static async deleteTask(req,res){
        const taskToDelete = Tasks.find(task => task.TaskId === parseInt(req.params.TaskId))
        if(!taskToDelete)
        return res.status(404).json('There is no task to deleted.');
        const index = Tasks.indexOf(taskToDelete);
        Tasks.splice(index,1);
        res.status(200).json(`task successfully deleted`);
        }
}


export default taskController;


