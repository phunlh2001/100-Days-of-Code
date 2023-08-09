const sqlQuery = readline();
// console.error(sqlQuery)
const ROWS = parseInt(readline());
const tableHeader = readline();

const tableRows = []
for (let i = 0; i < ROWS; i++) {
    const tableRow = readline()
    tableRows.push(tableRow)
}