/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const T = readline();

console.log(createImage(T))

function createImage(recipe) {
  const abbreviations = {
    sp: ' ',
    bS: '\\',
    sQ: "'",
    nl: '\n',
  }

  const chunks = recipe.replace(/nl/g, '1nl').split(" ")
  let result = []

  chunks.forEach((chunk) => {
    const matches = chunk.match(/^(\d+)(.+?)$/)
    if (matches) {
      const count = parseInt(matches[1])
      const char = matches[2]
      const expandedChar = abbreviations[char] || char
      result.push(expandedChar.repeat(count))
    }
  })
  
  return result.join("")
}
