function distBetween(p1, p2) {
  const [x1, y1] = p1
  const [x2, y2] = p2
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

function findClosest(curPoint, points, usedPoints) {
  let closestDist = Infinity
  let closestIndex = -1

  for (let i = 0; i < points.length; i++) {
    if (usedPoints[i]) continue

    const dist = distBetween(curPoint, points[i])

    if (dist < closestDist) {
      closestDist = dist
      closestIndex = i
    }
  }

  usedPoints[closestIndex] = true
  return [points[closestIndex], closestDist]
}

const N = parseInt(readline())
const cities = []
const points = new Array(N).fill(false)
let firstPoint = null

for (let i = 0; i < N; i++) {
  var [x, y] = readline().split(' ').map(Number)
  if (i === 0) {
    firstPoint = [x, y]
  } else {
    cities.push([x, y])
  }
}

let curPoint = firstPoint
let total = 0

for (let _ = 0; _ < N - 1; _++) {
  const [nextPoint, dist] = findClosest(curPoint, cities, points)
  curPoint = nextPoint
  total += dist
}

total += distBetween(curPoint, firstPoint)
console.log(Math.round(total))
