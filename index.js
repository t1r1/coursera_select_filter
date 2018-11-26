/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    let functionsList = Array.prototype.slice.call(arguments).slice(1)
    let filters = functionsList.filter(item => item.name === 'filterIn')
    let selectors = functionsList.filter(item => item.name === 'select')

    filters.forEach(method => {
        collection = method(collection)
    })

    selectors.forEach(method => {
        collection = method(collection)
    })

    return collection
}

/**
 * @params {String[]}
 */
function select() {
    let fieldNames = Array.prototype.slice.call(arguments)
    return function select (collection) {
        return collection.map(item => {
            let newItem = {}
            fieldNames.forEach(element => {
                if (item.hasOwnProperty(element)) {
                    newItem[element] = item[element]
                }
            });
            return newItem
        })
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filterIn (collection) {
        return collection.filter(item => {
            return values.includes(item[property])
        })
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
