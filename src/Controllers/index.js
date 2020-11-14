import Tasks from "../db/index";
class taskController{
    static async findTask(req,res) {
        try {
            const findById = Tasks.find(task => task.TaskId === parseInt(req.params.TaskId));
            if(!findById)res.status(404).json({
                static: 404,
                message: 'Task was nowhere to be found'
            })
            res.status(200).json({
                message: success,
                found_task: [findById]
            });
            }
            catch (error) {
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
                    message: success,
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
            try {
                const taskToDelete = Tasks.find(task => task.TaskId === parseInt(req.params.TaskId))
                if(!taskToDelete) return res.status(404).json('There is no task to deleted.');
                const index = Tasks.indexOf(taskToDelete);
                Tasks.splice(index,1);
                res.status(200).json(`task successfully deleted`);
            }
            catch (error) {
                res.send({
                    message:'Fatal error found',
                    error: error
                })
            }
        }
        static async getAllTasks(req,res) {
            try {
                res.status(200).send({
                    status: 200,
                    message: "the database contains these data below",
                    data: [Tasks]
                })
            }
            catch (error) {
                res.send({
                    message:'Fatal error found',
                    error: error
                })
            }
        }
        static async getByPriority(req,res) {
            try {
                const priority = [];
                Tasks.map(p=>{
                    if(p.TaskPriority === req.params.TaskPriority){
                        priority.push(p);
                    }
                });
                if (priority.length===0) {
                    res.status(404).send({message:'the task with given priority is not found'})
                } else{
                    res.status(200).send({
                        message:'success',
                        data:priority
                    });
                }
            }
            catch (error) {
                res.send({
                    message:'Fatal error found',
                    error: error
                })
            }
            }
        }

export default taskController;


