const dateValidator = (date) => {
    if (!date) {
        return false
    }
    if (isNaN(Date.parse(date))) {
        return false
    }
    return true
}
module.exports = dateValidator