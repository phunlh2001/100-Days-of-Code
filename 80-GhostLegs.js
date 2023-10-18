var inputs = readline().split(' ')
const W = parseInt(inputs[0])
const H = parseInt(inputs[1])

const rows = []
for (let i = 0; i < H; i++) {
  const line = readline()
  rows.push(line)
}

for (let i = 0; i < W; i++) {
  if (i % 3 !== 0) continue

  let position = i
  let char = 'A'

  for (let j = 0; j < rows.length; j++) {
    if (j === 0) {
      char = rows[j].charAt(position)
    }

    if (position < W - 1 && rows[j].charAt(position + 1) === '-') {
      position += 3
    } else if (position >= 1 && rows[j].charAt(position - 1) === '-') {
      position -= 3
    }
  }
  console.log(char + '' + rows[H - 1].charAt(position))
}
