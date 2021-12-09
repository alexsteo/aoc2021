const fs = require("fs")

// const data = fs.readFileSync("../input/input9.txt", "utf-8").split('\n')
const data = fs.readFileSync("../input/dummy.txt", "utf-8").split('\n')

//--------------------------------------------------------------------------------------\\
console.log("Part 1: ")

const checkNeighbours = (input, h, w, i) => {
    if (i % w !== 0 && input[i] >= input[i - 1]) { return false }
    if (i % w !== w - 1 && input[i] >= input[i + 1]) { return false }
    if (i / h !== 0 && input[i] >= input[i - w]) { return false }
    if (i / h !== h - 1 && input[i] >= input[i + w]) { return false }
    return input[i]
}

let input = [];
let w = data[0].length;
let h = data.length;
let sum = 0;
for (let d of data) {
    input = input.concat(d.split("").map(e => parseInt(e)))
}

for (let i = 0; i < input.length; i++) {
    let result = checkNeighbours(input, h, w, i);
    if (result !== false) {
        sum += result + 1;
        console.log(result, i)
    }
}

console.log(sum)


console.log("--------------------------------------------------------------------------------------------------------")
//--------------------------------------------------------------------------------------\\
console.log("Part 2: ")

let input2 = [];
let mins = [];
for (let d of data) {
    input2 = input2.concat(d.split("").map(e => parseInt(e)))
}

const getBasins = (input, i, w, h, b) => {
    console.log(b)
    if(i < 0 || b.indexOf(i) >= 0) {return};
    b.push(i)
    console.log(b)
    if (i % w <= 0 || input[i - 1] === 9) { 
        return
    } else {
        
    }
    if (i % w < w - 1 || input[i + 1] !== 9) {
        getBasins(input, i + 1, w, h, b)
    }
    if (i / h > 0 || input[i - w] !== 9) {
        getBasins(input, i - w, w, h, b)
    }
    if (i / h < h - 1 || input[i + w] !== 9) {
        getBasins(input, i + w, w, h, b)
    }
    return b;
}

for (let i = 0; i < input.length; i++) {
    let result = checkNeighbours(input, h, w, i);
    if (result !== false) {
        mins.push(i)
    }
}

// for(let min of mins) {
    let basin = getBasins(input2, mins[0], w, h, []);
    console.log(basin)
// }
