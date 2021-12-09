const fs = require("fs")

const data = fs.readFileSync("../input/input9.txt", "utf-8").split('\n')
// const data = fs.readFileSync("../input/dummy.txt", "utf-8").split('\n')

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
let basins = [];
for (let d of data) {
    input2 = input2.concat(d.split("").map(e => parseInt(e)))
}

const getBasins = (input, i, w, h, b) => {
    if (i < 0 || b.indexOf(i) >= 0 || input[i] === 9) { return b }
    b.push(i);
    if (i % w > 0) {
        // console.log(i % w)
        b = getBasins(input, i - 1, w, h, b)
    }
    if (i % w < w - 1) {
        // console.log(i % w)
        b = getBasins(input, i + 1, w, h, b)
    }
    if (i / w > 0) {
        // console.log(i / w)
        b = getBasins(input, i - w, w, h, b)
    }
    if (i / w < h - 1) {
        console.log(i / w, i, h)
        b = getBasins(input, i + w, w, h, b)
    }
    return b;
}

for (let i = 0; i < input.length; i++) {
    let result = checkNeighbours(input, h, w, i);
    if (result !== false) {
        mins.push(i)
    }
}

for(let min of mins) {
    let basin = getBasins(input2, min, w, h, []);
    basins.push(basin);
}

basins.sort( (first, second) => second.length - first.length);
// console.log(basins.slice(0, 3))

console.log(basins[0].length, basins[1].length, basins[2].length, basins[0].length * basins[1].length * basins[2].length)
