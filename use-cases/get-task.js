const { createTask } = require("../entities");

const makeGetTask = ({ taskDb }) => {
    return async function getTask({ id }) {
        if (!id) {
            throw new Error("You must supply an id.");
        }
        const res = await taskDb.findTaskById({ id});
        const task = createTask(res)
        return task
    }
}

module.exports = makeGetTask