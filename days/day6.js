const fs = require("fs")

// const data = fs.readFileSync("../input/dummy.txt", "utf-8").split(',').map(e => parseInt(e));
const data = fs.readFileSync("../input/input6.txt", "utf-8").split(',').map(e => parseInt(e));

//--------------------------------------------------------------------------------------\\
console.log("Part 1: ")
let fish = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let input = data;

for (let f of input) {
    fish[f]++;
}

let days1 = 80;
for (let i = 0; i < days1; i++) {
    let aux = fish[0];
    fish[0] = fish[1];
    fish[1] = fish[2];
    fish[2] = fish[3];
    fish[3] = fish[4];
    fish[4] = fish[5];
    fish[5] = fish[6];
    fish[6] = fish[7] + aux;
    fish[7] = fish[8];
    fish[8] = aux;
}

let total1 = 0;
for (let i = 0; i < 9; i++) total1 += fish[i];

console.log(total1)

console.log("--------------------------------------------------------------------------------------------------------")
//--------------------------------------------------------------------------------------\\
console.log("Part 2: ")
let fish2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let input2 = data;

for (let f of input2) {
    fish2[f]++;
}

let days2 = 256;
for (let i = 0; i < days2; i++) {
    let aux = fish2[0];
    fish2[0] = fish2[1];
    fish2[1] = fish2[2];
    fish2[2] = fish2[3];
    fish2[3] = fish2[4];
    fish2[4] = fish2[5];
    fish2[5] = fish2[6];
    fish2[6] = fish2[7] + aux;
    fish2[7] = fish2[8];
    fish2[8] = aux;
}

let total = 0;
for(let i = 0; i < 9; i++) total += fish2[i];

console.log(total)

