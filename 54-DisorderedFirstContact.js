class Result {
  constructor() {
      this.lastLength = 0;
      this.lastSubLength = 0;
      this.message = "";
  }
}

const N = parseInt(readline());
const absN = Math.abs(N);
let MESSAGE = readline();

for (let i = 0; i < absN; i++) {
  MESSAGE = N < 0 ? encode(MESSAGE).message : decode(MESSAGE)
}

console.log(MESSAGE)

function encode(message) {
  const result = new Result()
  let length = 1
  const builder = []
  for (let i = 0; i < message.length; i += length++) {
      const sub = message.substring(i, Math.min(message.length, i + length))

      result.lastLength = length
      result.lastSubLength = sub.length

      if (length % 2 === 0) builder.unshift(sub)
      else builder.push(sub)
  }
  result.message = builder.join("")
  return result
}

function decode(message) {
  const r = encode(message)

  let result
  const fromLeft = r.lastLength % 2 === 0

  let leftIndex = 0
  let rightIndex = message.length

  if (fromLeft) {
      result = message.substring(leftIndex, r.lastSubLength)
      leftIndex += r.lastSubLength;
  } else {
      result = message.substring(rightIndex - r.lastSubLength)
      rightIndex -= r.lastSubLength
  }

  let times = r.lastLength - 1

  while (times > 0) {
      if (times % 2 === 0) {
          result = message.substring(leftIndex, leftIndex + times) + result
          leftIndex += times--
      } else {
          result = message.substring(rightIndex - times, rightIndex) + result
          rightIndex -= times--
      }
  }

  return result
}
