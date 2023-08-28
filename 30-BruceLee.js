const ENCRYPT = readline().split(' ')

let st = '';

for (let i = 0; i < ENCRYPT.length; i += 2) {
    // format ['0', '00']
    const tmp = ENCRYPT[i]
    
    if (tmp === '000') return console.log('INVALID')

    // ENCRYPT[i + 1]?.length
    // if ENCRYPT[i + 1].length === undefined
    if (ENCRYPT[i+1] === undefined) return console.log('INVALID')
    const num = ENCRYPT[i + 1].length
    const bin = tmp === '0' ? '1' : '0'

    for (let j = 0; j < num; j++) {
        st += bin
    }
}

// if st.len !== 7 bit
if (st.length % 7 !== 0) return console.log('INVALID')

let res = ''
while (st.length > 0) {
    const cur = st.substring(0, 7)
    st = st.substring(7)
    const decode = String.fromCharCode(parseInt('0' + cur, 2))
    res += decode
}

console.log(res)