function isCardStable(i, j, castle, height, width) {
  switch (castle[j][i]) {
      case '/':
          return (i !== width - 1 && castle[j][i + 1] === '\\') &&
              (j === height - 1 || castle[j + 1][i] === '\\')
      case '\\':
          return (i !== 0 && castle[j][i - 1] === '/') &&
              (j === height - 1 || castle[j + 1][i] === '/')
  }
  return true
}

const H = parseInt(readline());
const map = {}

for (let i = 0; i < H; i++) {
  map[i] = readline();
}

const castleWidth = H * 2
let isCastleStable = true

for (let i = 0; i < H; i++) {
  for (let j = 0; j < castleWidth; j++) {
      if (!isCardStable(j, i, map, H, castleWidth)) {
          isCastleStable = false
          break
      }
  }
  if (!isCastleStable) break
}

if (isCastleStable) {
  console.log("STABLE")
} else {
  console.log("UNSTABLE")
}