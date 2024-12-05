const makeHandleModeration = require('./handle-moderation');
const makeAddTask = require('./add-task');
const makeRemoveTask = require('./remove-task')
const taskDb = require('../data-access/index');
const makeGetTask = require('./get-task');


const handleModeration = makeHandleModeration()
const addTask = makeAddTask({taskDb, handleModeration})
const removeTask = makeRemoveTask({taskDb})
const getTask = makeGetTask({ taskDb })

const taskService = Object.freeze({
    addTask,
    getTask,
    removeTask,
    handleModeration
})

module.exports = taskService