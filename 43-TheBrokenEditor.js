const typedKeys = readline()
const text = []
let cursor = 0

for (const char of typedKeys) {
  switch (char) {
    case '<':
      cursor = Math.max(0, cursor - 1)
      break
    case '>':
      cursor = Math.min(cursor + 1, text.length)
      break
    case '-':
      if (cursor > 0) {
        text.splice(cursor - 1, 1)
        cursor--
      }
      break
    default:
      text.splice(cursor, 0, char)
      cursor++
      break
  }
}

const result = text.join``
console.log(result)