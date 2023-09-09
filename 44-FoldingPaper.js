const order = readline()
const side = readline()
const charCount = { 'R': 1, 'L': 1, 'U': 1, 'D': 1 }
const charMapping = { 'R': "LUD", 'L': "RUD", 'U': "DLR", 'D': "ULR" }

for (const char of order) {
  charCount[charMapping[char][0]] += charCount[char]
  charCount[charMapping[char][1]] *= 2
  charCount[charMapping[char][2]] *= 2
  charCount[char] = 1
}

console.log(charCount[side[0]])