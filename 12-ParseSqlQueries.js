const sqlQuery = readline()
const ROWS = parseInt(readline())
const tableHeader = readline().split(' ')
const selectPart = sqlQuery.split('SELECT')[1].split('FROM')[0].trim()
const selectedColumns = selectPart === '*' ? tableHeader : selectPart.split(',').map(col => col.trim())
const wherePart = sqlQuery.includes('WHERE') ? sqlQuery.split('WHERE')[1].trim().split(' ') : null
const orderByPart = sqlQuery.includes('ORDER BY') ? sqlQuery.split('ORDER BY')[1].trim().split(' ') : null

const selectedColumnIndexes = selectedColumns.map(col => tableHeader.indexOf(col))
const filteredTableHeader = selectedColumnIndexes.map(index => tableHeader[index])
const filterTableRows = []

for (let i = 0; i < ROWS; i++) {
    const row = readline().split(' ')
    let shouldInclude = true

    if (wherePart) {
        const conditionColumnIndex = tableHeader.indexOf(wherePart[0].trim())
        shouldInclude = row[conditionColumnIndex] === wherePart[2].trim()
    }

    if (shouldInclude) {
        filterTableRows.push(selectedColumnIndexes.map(index => {
            const value = row[index]
            return value !== undefined ? (!isNaN(value) ? parseFloat(value) : value) : null
        }));
    }
}

if (orderByPart) {
    const orderByColumnIndex = tableHeader.indexOf(orderByPart[0].trim());
    const sortOrder = orderByPart[1].trim().toUpperCase() === 'DESC' ? -1 : 1

    filterTableRows.sort((a, b) => {
        const aValue = a[orderByColumnIndex]
        const bValue = b[orderByColumnIndex]

        if (aValue === bValue) return 0

        if (aValue === null || aValue === undefined) return sortOrder

        if (bValue === null || bValue === undefined) return -sortOrder

        return aValue < bValue ? -sortOrder : sortOrder
    })
}

console.log(filteredTableHeader.join(' '))
filterTableRows.forEach(row => console.log(row.join(' ')))
