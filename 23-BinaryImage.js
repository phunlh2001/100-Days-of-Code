/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const h = parseInt(readline());
const grid = []
const format = ['.', 'O']

for (let i = 0; i < h; i++) {
    const row = readline().split(' ').map(Number)
    const process = row.map((item, index) => format[index % 2].repeat(item)).join('')
    grid.push(process)
}

const isEqualLength = grid.every(row => row.length === grid[0].length)

if (isEqualLength) {
    console.log(grid.join('\n'))
} else {
    console.log('INVALID')
}
