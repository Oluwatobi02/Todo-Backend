const Id = require('../adapters/Id')()

const makeTaskDb = ({ makeDb }) => {
    return Object.freeze({
        findTaskById,
        findAllTasks,
        insertTask,
        removeTaskById,
    })
    
    async function findAllTasks ({ id }) {
        const db = await makeDb()
        const result = await db.collection('tasks').findOne({ id })
        return (await result.toArray()).map(({ _id: id, ...found }) => ({
            id,
            ...found
        }))}

    async function findTaskById ({ id: _id }) {
        const db = await makeDb()
        const result = await db.collection('tasks').find({_id})
        const found = await result.toArray()
        if (found.length === 0) {
            return null
        }
        const {_id: id, ...info} = found[0]
        return {id, ...info}
    }

    async function insertTask ({ id: _id, ...taskinfo }) {
        const db = await makeDb()
        const result = await db.collection('tasks').insertOne({_id, ...taskinfo})
        const { ...insertedInfo } = result
        return { _id: result.insertedId, ...insertedInfo }
    }

    async function removeTaskById ({ id }) {
        const db = await makeDb()
        const result = await db.collection('tasks').deleteOne({ _id: id})
        return result.deletedCount
    }
}

module.exports = makeTaskDb