function rotateBlock(matrix, angle) {
  angle = (angle - 45) % 360
  while (angle > 0) {
    matrix = rotateMatrix(matrix)
    angle -= 90
  }
  return matrix
}

function rotateMatrix(matrix) {
  return matrix[0].map((_, i) => matrix.map((row) => row[i])).reverse()
}

function getDiagonal(matrix, offset) {
  const diagonal = []
  for (let i = 0; i < matrix.length; i++) {
    const j = i + offset
    if (j >= 0 && j < matrix.length) {
      diagonal.push(matrix[i][j])
    }
  }
  return diagonal
}

const size = parseInt(readline())
const angle = parseInt(readline())
const block = Array.from({ length: size }, () => readline().split(' '))

const rotatedBlock = rotateBlock(block, angle)

for (let i = size - 1; i >= -size; i--) {
  const sp = ' '.repeat(Math.abs(i))
  const diagonal = getDiagonal(rotatedBlock, i)
  if (diagonal.length) console.log(sp + diagonal.join(' ') + sp)
}
