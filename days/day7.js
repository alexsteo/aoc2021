const fs = require("fs")

const data = fs.readFileSync("../input/input7.txt", "utf-8").split(',').map(e => parseInt(e))
// const data = fs.readFileSync("../input/dummy.txt", "utf-8").split(',').map(e => parseInt(e))
//--------------------------------------------------------------------------------------\\
console.log("Part 1: ")
let minDist = 1000000;
let min = 10000;
for (let i = 0; i < Math.max(...data); i++) {
    let sum = 0;
    for(let dat of data) {
        sum += Math.abs(i - dat);
    }
    if(minDist > sum) {
        minDist = sum;
        min = i;
    }
}

console.log(min, minDist)

console.log("--------------------------------------------------------------------------------------------------------")
//--------------------------------------------------------------------------------------\\
console.log("Part 2: ")

minDist = 10000000000000;
min = 10000000;
for (let i = 0; i < Math.max(...data); i++) {
    let sum = 0;
    for (let dat of data) {
        if (dat !== i) {
            let diff = Math.abs(i - dat);
            sum += diff * (diff + 1) / 2;
        }
    }
    if (minDist > sum) {
        minDist = sum;
        min = i;
    }
}

console.log(min, minDist)
