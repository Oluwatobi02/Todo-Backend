const makeHandleModeration = () => {
    return async function handleModeration({ task }) {
        const moderated = { ...task }
        moderated.publish()
        return moderated
    }
}

module.exports = makeHandleModeration