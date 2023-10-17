function calcScore(x, y, radius) {
  if (Math.abs(x) + Math.abs(y) <= radius) return 15

  if (Math.hypot(x, y) <= radius) return 10

  if (Math.abs(x) <= radius && Math.abs(y) <= radius) return 5

  return 0
}

const SIZE = parseInt(readline())
const half = SIZE / 2

const N = parseInt(readline())
const scoreBoard = {}
for (let i = 0; i < N; i++) {
  const name = readline()
  scoreBoard[name] = 0
}
const T = parseInt(readline())
for (let i = 0; i < T; i++) {
  var inputs = readline().split(' ')
  const throwName = inputs[0]
  const x = parseInt(inputs[1])
  const y = parseInt(inputs[2])

  scoreBoard[throwName] += calcScore(x, y, half)
}

Object.entries(scoreBoard)
  .sort((a, b) => b[1] - a[1])
  .forEach((item) => console.log(item[0] + ' ' + item[1]))
