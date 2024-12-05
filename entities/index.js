const Id = require('../adapters/Id')()
const dateValidator = require('../adapters/dateValidator')
const buildCeateTask = require('./task')


const createTask = buildCeateTask({Id, dateValidator})


module.exports = { createTask}