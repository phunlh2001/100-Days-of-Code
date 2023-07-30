const A1 = parseInt(readline());
const N = parseInt(readline());

console.log(vanEckSequence(A1, N))

function vanEckSequence(init, n) {
    const map = {}
    let result = [init]

    for( let i = 0 ; i < n ; i++) {
        const number = result[i];
        const position = i + 1;
        
        if (map[number] !== undefined) {
            result.push(position - map[number]);
        } else {
           result.push(0);
        }
       
        map[number] = position;
    }

    return result[n-1]
}