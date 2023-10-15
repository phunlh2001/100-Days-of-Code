// medium - https://www.codingame.com/training/medium/snake-encoding

const N = parseInt(readline())
const X = parseInt(readline())

const map = []
for (let i = 0; i < N; i++) {
  map[i] = readline().split('')
}

for (let i = 0; i < X; i++) {
  let y = N % 2 === 0 ? N - 1 : 0
  let x = N - 1
  let dir = x % 2 === 0 ? 1 : -1

  const end = map[y][x]

  while (x !== 0 || y !== N - 1) {
    map[y][x] = map[y + dir][x]

    y += dir

    if (y % (N - 1) === 0 && x > 0) {
      map[y][x] = map[y][--x]
      dir *= -1
    }
  }

  map[y][x] = end
}

for (let i = 0; i < N; i++) {
  console.log(map[i].join(''))
}
