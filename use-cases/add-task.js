const {createTask} = require('../entities/index');

const makeAddTask = ({taskDb, handleModeration}) => {
    return async function addTask(taskInfo) {
        const task = createTask(taskInfo)
        const exists = await taskDb.findTaskById({id: task.getId()})
        if (exists) {
            return exists
        }
        const moderated = await handleModeration({task})
        return await taskDb.insertTask({
            itemDescription: moderated.getItemDescription(),
            itemTitle: moderated.getItemTitle(),
            is_completed: moderated.getIsCompleted(),
            is_deleted: moderated.getIsDeleted(),
            date_due: moderated.getDateDue(),
            published: moderated.getIsPublished(),
            created_at: moderated.getCreatedAt(),
            updated_at: moderated.getUpdatedAt(),
            id: moderated.getId()
        })
    }
}

module.exports = makeAddTask