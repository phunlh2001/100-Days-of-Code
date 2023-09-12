const N = parseInt(readline())
const corners = []
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ')
    const x = parseInt(inputs[0])
    const y = parseInt(inputs[1])
    corners.push([x, y])
}

function isPointInPolygon(x, y, polygon) {
    let isInside = false
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i][0]
        const yi = polygon[i][1]
        const xj = polygon[j][0]
        const yj = polygon[j][1]
        const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
        if (intersect) {
            isInside = !isInside
        }
    }
    return isInside
}

const M = parseInt(readline())
for (let i = 0; i < M; i++) {
    var inputs = readline().split(' ')
    const x = parseInt(inputs[0])
    const y = parseInt(inputs[1])
    console.log(isPointInPolygon(x, y, corners) ? "hit" : "miss")
}
