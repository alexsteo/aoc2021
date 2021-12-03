const fs = require("fs")

const data = fs.readFileSync("../input/input3.txt", "utf-8").split('\n').map(d => d.slice(0, 12))
// const data = fs.readFileSync("../input/dummy.txt", "utf-8").split('\n').map(d => d.slice(0, 5))

//--------------------------------------------------------------------------------------\\
console.log("Part 1: ")

let dataLength = data.length
let dataDepth = 11;
let bits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// let bits = [0, 0, 0, 0, 0]
for (let d of data) {
    dataBits = d.split("");
    for (let i = 0; i < dataBits.length; i++) {
        if (dataBits[i] == '1') {
            bits[i]++;
        }
    }
}

let gamma = 0;
let eps = 0;

for (let i = bits.length - 1; i >= 0; i--) {
    if (bits[i] > dataLength / 2) {
        gamma += Math.pow(2, dataDepth - i);
    } else {
        eps += Math.pow(2, dataDepth - i);
    }
}
console.log(bits.map(bit => (bit > dataLength / 2) ? 1 : 0))
console.log(gamma, eps, gamma * eps);
console.log("--------------------------------------------------------------------------------------------------------")
//--------------------------------------------------------------------------------------\\
console.log("Part 2: ")
