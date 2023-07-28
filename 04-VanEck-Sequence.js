const A1 = parseInt(readline());
const N = parseInt(readline());
console.error(A1, N)

const seq = new Array()
seq.push(A1)

for (let i = 0; i < N; i++) {
    let distance = 0
    let last = seq.pop()
    if (seq.includes(last)) {
        let exist = seq.lastIndexOf(last)
        seq.push(last)
        distance = (seq.length - 1) - exist
    } else {
        seq.push(last)
    }
    seq.push(distance)
}

console.log(seq[N-1]);
