// meidum - https://www.codingame.com/training/medium/dwarfs-standing-on-the-shoulders-of-giants

const n = parseInt(readline())
const map = []

function findMaxDepth(key) {
    const list = map[key]

    if (list && list.length > 0) {
        let maxDepth = 0
        for (const i of list) {
            maxDepth = Math.max(maxDepth, findMaxDepth(i) + 1)
        }
        return maxDepth
    }
    
    return 1
}

for (let i = 0; i < n; i++) {
    var [x, y] = readline().split(' ').map(Number)

    if (!map[x]) {
        map[x] = []
    }
    map[x].push(y)
}

let result = 0

for (let i = 0; i < map.length; i++) {
    if (map[i]) {
        result = Math.max(result, findMaxDepth(i))
    }
}

console.log(result)