const taskService = require("../use-cases")
const task = {
    itemDescription: "This is a test task",
    itemTitle: "Test Task",
    date_due: new Date(),

}
// const taskToDo = createTask(task)
// console.log(taskToDo.getItemTitle())

const f = async () => {
    // const res = await taskService.addTask(task)
    // console.log(res)
    const res = await taskService.getTask({ id: "790da89c-d4a7-4835-ba8a-ef64a0ffc34e"})
    // console.log(res)
    const res2 = await taskService.removeTask({id: res.getId()})
    console.log(res2)
}
f()