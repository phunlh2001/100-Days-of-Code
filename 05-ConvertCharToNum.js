const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const map = {}
for (let i = 0; i < str.length; i++) {
  map[str[i]] = i + 1
}

function convert(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] !== undefined) {
      result += map[str[i]]
    }
  }
  return result
}

console.log(convert('ABCD'))
