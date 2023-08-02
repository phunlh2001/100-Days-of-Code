const N = parseInt(readline());
const arr = []
for (let i = 0; i < N; i++) {
    const inputs = readline().split(' ');
    const name = inputs[0];
    const r = parseInt(inputs[1]);
    const c = parseInt(inputs[2]);
    
    arr.push({ name: name, rows: r, cols: c })
}

function lazySnakeEatingOrder(array) {
    let result = []
    // ascending order by rows
    array.sort((a, b) => a.rows - b.rows)
    
    let rows = {}
    array.forEach((item) => {
        if (!rows[item.rows]) {
            rows[item.rows] = [];
        }
        rows[item.rows].push(item);
    });
    
    Object.values(rows).forEach((rowArray, index) => {
        if (index % 2 === 0) {
            // For even-indexed rows sort in ascending order by cols
            rowArray.sort((a, b) => a.cols - b.cols);
        } else {
            // For odd-indexed rows, sort in descending order by cols
            rowArray.sort((a, b) => b.cols - a.cols);
        }
    });

    Object.values(rows).forEach((rowArray) => {
        rowArray.forEach(item => {
            result.push(item.name)
        })
    })

    return result.join(",")
}
 
console.log(lazySnakeEatingOrder(arr));