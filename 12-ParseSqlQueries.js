/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
const sqlQuery = readline();
console.error(sqlQuery)
const ROWS = parseInt(readline());
const tableHeader = readline();

const tableRows = []
for (let i = 0; i < ROWS; i++) {
    const tableRow = readline()
    tableRows.push(tableRow)
}

parseQuery(sqlQuery, tableHeader, tableRows)

function parseQuery(query, header, rows) {
    if (query.includes('ORDER BY')) {
        if (query.includes('WHERE')) {
            const match = query.match(/SELECT (.+) FROM (.+) WHERE (.+) ORDER BY (.+) DESC/)
            const selectNames = match[1].split(', ')
            const [key, value] = match[3].split(' = ')
            const orderByColumn = match[4]
    
            const mapCondition = { [key]: value }
            const selectedIndices = []
            header.split(' ').forEach((columnName, index) => {
                if (selectNames.includes(columnName)) {
                    selectedIndices.push(index)
                }
            })
    
            const filteredRows = []
            rows.forEach(row => {
                const values = row.split(' ')
                let satisfiesCondition = true
    
                Object.keys(mapCondition).forEach(conditionKey => {
                    const conditionValue = mapCondition[conditionKey]
                    const columnIndex = header.split(' ').indexOf(conditionKey)
    
                    if (values[columnIndex] !== conditionValue) {
                        satisfiesCondition = false
                    }
                })
    
                if (satisfiesCondition) {
                    const selectedValues = selectedIndices.map(index => values[index])
                    filteredRows.push({ values: selectedValues, originalRow: row })
                }
            })
    
            const orderByIndex = header.split(' ').indexOf(orderByColumn)
            const sortedRows = filteredRows.sort((a, b) => {
                const aValue = parseFloat(a.values[orderByIndex])
                const bValue = parseFloat(b.values[orderByIndex])
                return bValue - aValue // Sort in descending order
            })
    
            console.log(header)
            sortedRows.forEach(row => {
                console.log(row.originalRow)
            })
        } else {
            
        }
    } else if (query.includes('*')) {
        console.log(header)
        rows.forEach(item => console.log(item))
    } else if (query.includes('WHERE')) {
        // ignore element of second (.+)
        const match = query.match(/SELECT (.+) FROM (.+) WHERE (.+)/)
        const selectNames = match[1].split(', ')
        const [key, value] = match[3].split(' = ')

        const mapCondition = { [key]: value }
        const selectedIndices = []
        header.split(' ').forEach((columnName, index) => {
            if (selectNames.includes(columnName)) {
                selectedIndices.push(index)
            }
        })

        console.log(selectNames.join(' '))
        rows.forEach(row => {
            const values = row.split(' ')
            let satisfiesCondition = true

            Object.keys(mapCondition).forEach(conditionKey => {
                const conditionValue = mapCondition[conditionKey]
                const columnIndex = header.split(' ').indexOf(conditionKey)

                if (values[columnIndex] !== conditionValue) {
                    satisfiesCondition = false
                }
            })

            if (satisfiesCondition) {
                const selectedValues = selectedIndices.map(index => values[index])
                console.log(selectedValues.join(' '))
            }
        })
    }
}