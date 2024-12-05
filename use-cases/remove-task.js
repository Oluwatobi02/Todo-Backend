const { createTask } = require("../entities")

const makeRemoveTask = ({ taskDb }) => {
    return async function removeTask({ id } = {}) {
        if (!id) {
            throw new Error('You must supply an id.')
        }

        const task = await taskDb.findTaskById({ id })
        
        
        if (!task) {
            return deleteNothing()
        }
        const taskToDelete = createTask(task)
        return deleteTask(taskToDelete)
    }

    async function deleteNothing() {
        return {
            deleted: 0,
            message: 'Task not found, nothing to delete.'
        }
    }

    async function deleteTask(task) {
        task.markDeleted()
        const deleted = await taskDb.removeTaskById({id: task.getId()})
        return {
            deleted,
            message: 'Task has been deleted.'
        }
    }
}

module.exports = makeRemoveTask