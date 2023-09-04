const n = parseInt(readline());
let map = {}
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const b = inputs[0];
    const c = parseInt(inputs[1]);
    map[b] = String.fromCharCode(c)
}
const s = readline();
let tmp = ''
let out = ''

for (let i = 0; i < s.length; i++) {
    tmp += s[i]
    if (map[tmp]) {
        out += map[tmp]
        tmp = ''
    }
}

if (tmp.length > 0) console.log(`DECODE FAIL AT INDEX ${s.lastIndexOf(tmp)}`)
else console.log(out)