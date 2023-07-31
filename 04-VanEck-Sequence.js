const A1 = parseInt(readline());
const N = parseInt(readline());

console.log(vanEckSequence(A1, N))

function vanEckSequence(init, n) {
    const map = {}
    let arr = [init]

    for( let i = 0 ; i < n ; i++) {
        const number = arr[i];
        const position = i + 1;
        
        if (map[number] !== undefined) {
            arr.push(position - map[number]);
        } else {
           arr.push(0);
        }
       
        map[number] = position;
    }

    return arr[n-1]
}