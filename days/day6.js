const fs = require("fs")

// const data = fs.readFileSync("../input/dummy.txt", "utf-8").split(',').map(e => parseInt(e));
const data = fs.readFileSync("../input/input6.txt", "utf-8").split(',').map(e => parseInt(e));

//--------------------------------------------------------------------------------------\\
console.log("Part 1: ")
let input1 = data;
let days = 80;
for (let i = 0; i < days; i++) {
    let aux = [];
    console.log(i, input1.length)
    for (let j = 0; j < input1.length; j++) {
        let x = input1[j];
        if (x === 0) {
            aux.push(6);
            aux.push(8);
        } else {
            aux.push(x - 1);
        }
    }
    input1 = aux.slice();
}

console.log(input1.length)

console.log("--------------------------------------------------------------------------------------------------------")
//--------------------------------------------------------------------------------------\\
console.log("Part 2: ")
let input2 = data;
let days2 = 256;
for (let i = 0; i < days2; i++) {
    let aux = [];
    console.log(i, input2.length)
    for (let j = 0; j < input2.length; j++) {
        let x = input2[j];
        if (x === 0) {
            aux.push(6);
            aux.push(8);
        } else {
            aux.push(x - 1);
        }
    }
    input2 = aux.slice();
}

console.log(input1.length)

