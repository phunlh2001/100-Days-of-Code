const read = () => readline().split` `.map(Number)
let i = +readline(myBowls = read(opBowls = read()))

const my = myBowls
const op = opBowls

const size = my.length
let n = my[i]

for (my[i++] = 0; n-- > 0; i = i % (2*size-1)) {
    i < size ? my[i++]++ : op[i++ - size]++
}
const replacer = arr => arr.join` `.replace(/(\d)$/, '[$1]')

console.log(replacer(op))
console.log(replacer(my))
if (i === my.length) console.log('REPLAY')