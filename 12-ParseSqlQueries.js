const sqlQuery = readline();
console.error(sqlQuery)
const ROWS = parseInt(readline());
const tableHeader = readline();

const tableRows = []
for (let i = 0; i < ROWS; i++) {
    const tableRow = readline()
    tableRows.push(tableRow)
}

console.error(tableRows)
parseQuery(sqlQuery, tableHeader, tableRows)

function parseQuery(query, header, rows) {
    const found = query.match(/SELECT (.+) FROM/)
    if (found[1] === "*") {
        console.log(header)
        rows.forEach(item => console.log(item))
    } else {
        // ignore element of second (.+)
        const regex = /SELECT (.+) FROM (.+) WHERE (.+)/
        const [, selectNameStr,, whereStr] = query.match(regex)
        const selectNames = selectNameStr.split(", ")
        const whereCondition = whereStr.split(" = ")

        const map = {}
        for (const item of rows) {
            
        }
    }
}