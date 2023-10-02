// medium - https://www.codingame.com/training/medium/these-romans-are-crazy!

const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

const rom1 = readline()
const rom2 = readline()

function intToRoman(number) {
  let str = ''
  for (let i = 0; i < nums.length; i++) {
    while (number >= nums[i]) {
      str += romans[i]
      number -= nums[i]
    }
  }
  return str
}

function romanToInt(str) {
  let num = 0
  for (let i = 0; i < nums.length; i++) {
    while (str.indexOf(romans[i]) == 0) {
      num += nums[i]
      str = str.substring(romans[i].length)
    }
  }
  return num
}

const result = romanToInt(rom1) + romanToInt(rom2)
console.log(intToRoman(result))
