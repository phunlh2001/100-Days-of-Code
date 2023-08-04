const n = readline();
console.error(n)

console.log(findNextGrowth(n));

function findNextGrowth(str) {
  let s = str[0]
  let isChange = false

  for (let i = 1; i < str.length; i++) {
    if (str[i] < s[i - 1]) {
      s += s[i - 1]
      isChange = true
    } else if (str[i] > s[i - 1] && isChange) {
      s += s[i - 1]
    } else {
      s += str[i]
    }
  }

  if (!isChange) {
    let n = next(str)

    while (!isGrowing(n)) {
      n = next(n)
    }
    return n
  }

  return s
}

function next(s) {
  let flag = true
  let result = ''

  for (let i = s.length - 1; i >= 0; i--) {
    if (flag) {
      if (s[i] === '9') {
        result = '0' + result
        flag = true
      } else {
        result = String.fromCharCode(s.charCodeAt(i) + 1) + result
        flag = false
      }
    } else {
      result = s.slice(0, i + 1) + result
      break
    }
  }
  if (flag) {
    result = '1' + result
  }
  return result
}

function isGrowing(s) {
  for (let i = 1; i < s.length; i++) {
    if (s[i] < s[i - 1]) {
      return false
    }
  }
  return true
}
