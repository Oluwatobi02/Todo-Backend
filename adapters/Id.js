const uuid = require('uuid')
const Id = () => {
    return Object.freeze({
        makeId: () => uuid.v4().toString(),
        isValidId: (id) => uuid.validate(id)
    })
}

module.exports = Id