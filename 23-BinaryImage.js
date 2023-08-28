const h = parseInt(readline());
const grid = []
const format = ['.', 'O']

for (let i = 0; i < h; i++) {
    const row = readline().split(' ').map(Number)
                    .map((count, index) => format[index % 2].repeat(count)).join('')
    grid.push(row)
}

const isEqualLength = grid.every(row => row.length === grid[0].length)

if (isEqualLength) console.log(grid.join('\n'))
else console.log('INVALID')
