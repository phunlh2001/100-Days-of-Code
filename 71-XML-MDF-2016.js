const sequence = readline()
const weight = new Map()

const chars = sequence.split('')
let depth = 0

for (let i = 0; i < chars.length; i++) {
  if (chars[i] === '-') {
    i++
    weight.set(chars[i], (weight.get(chars[i]) || 0) + 1 / depth)
    depth--
  } else {
    depth++
  }
}

let max = null
for (let [key, value] of weight) {
  if (max === null || max[1] < value) {
    max = [key, value]
  }
}

console.log(max !== null ? max[0] : null)
