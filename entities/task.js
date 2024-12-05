

const buildCeateTask = ({Id, dateValidator}) => {
    return function createTask({
        itemDescription,
        itemTitle,
        is_completed = false,
        is_deleted  = false,
        date_due,
        published = false,
        created_at = Date.now(),
        updated_at = Date.now(),
        id = Id.makeId()
    } = {}) {
        if (!Id.isValidId(id)) {
            throw new Error('Task must have a valid id.')
        }
        if (!itemTitle || itemTitle.length < 2) {
            throw new Error('Task must have a title and be more than 1 character.')
        }
        if (!itemDescription || itemDescription.length < 2) {
            throw new Error('Task must have a description and be more than 1 character.')
        }
        if (!dateValidator(date_due)) {
            throw new Error('Task must have a valid due date.')
        }

        const deleted_task = ".xX This task has been deleted Xx."

        return Object.freeze({
            getItemDescription: () => itemDescription,
            getItemTitle: () => itemTitle,
            getIsCompleted: () => is_completed,
            getIsDeleted: () => is_deleted,
            getIsPublished: () => published,
            getDateDue: () => date_due,
            getCreatedAt: () => created_at,
            getUpdatedAt: () => updated_at,
            getId: () => id,
            publish: () => {
                published = true
            },
            unpublish: () => {
                published = false
            },
            markCompleted: () => {
                is_completed = true
            },
            markDeleted: () => {
                is_deleted = true
                itemDescription = deleted_task
                itemTitle = deleted_task
            }
        })

    }
}

module.exports = buildCeateTask