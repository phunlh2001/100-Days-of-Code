const expression = readline();
let found = true
let arr = []
for (const c of expression) {
    if ('([{'.includes(c)) arr.push(c)

    if (c === ')' && arr.pop() !== '(') found = false
    else if (c === ']' && arr.pop() !== '[') found = false
    else if (c === '}' && arr.pop() !== '{') found = false

    if (!found) break
}
if (found) found = arr.length === 0

console.log(found ? 'true' : 'false')