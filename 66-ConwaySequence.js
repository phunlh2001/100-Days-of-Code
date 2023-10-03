// medium - https://www.codingame.com/ide/puzzle/conway-sequence

const R = parseInt(readline())
const L = parseInt(readline())

const queue = [R]
const list = []

for (let i = 1; i < L; i++) {
  list.length = 0

  let current = queue.shift()
  let counter = 1

  while (queue.length > 0) {
    const j = queue.shift()
    if (current === j) {
      counter++
    } else {
      list.push(counter, current)
      current = j
      counter = 1
    }
  }
  list.push(counter, current)

  queue.push(...list)
}

console.log(queue.join(' '))