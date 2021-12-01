const fs = require("fs")

const data = fs.readFileSync("../input/input1.txt", "utf-8").split('\n').map(elem => parseInt(elem))

//--------------------------------------------------------------------------------------\\

let last = 0;
let increases = 0;
for (let i of data) {
    if (last !== 0 && i > last) {
        increases++;
    }
    last = i;
}
console.log(increases);

//--------------------------------------------------------------------------------------\\

let sum = data[0] + data[1] + data[2]
let increases2 = 0;
for (let i = 1; i < data.length - 2; i++) {
    let newSum = data[i] + data[i + 1] + data[i + 2]
    if (newSum > sum) {
        increases2++
    }
    sum = newSum
}
console.log(increases2)