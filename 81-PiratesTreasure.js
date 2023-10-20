const W = parseInt(readline())
const H = parseInt(readline())
const map = []

for (let i = 0; i < H; i++) {
  const inputs = readline().split(' ')
  const row = []

  for (let j = 0; j < W; j++) {
    const cell = parseInt(inputs[j])
    row.push(cell)
  }

  map.push(row)
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    const isIsolated =
      map[i][j] === 1 ||
      (i > 0 && j > 0 && map[i - 1][j - 1] === 0) ||
      (i > 0 && map[i - 1][j] === 0) ||
      (i > 0 && j < W - 1 && map[i - 1][j + 1] === 0) ||
      (i < H - 1 && j < W - 1 && map[i + 1][j + 1] === 0) ||
      (i < H - 1 && map[i + 1][j] === 0) ||
      (i < H - 1 && j > 0 && map[i + 1][j - 1] === 0) ||
      (j > 0 && map[i][j - 1] === 0) ||
      (j < W - 1 && map[i][j + 1] === 0)

    if (!isIsolated) {
      console.log(j + ' ' + i)
    }
  }
}
