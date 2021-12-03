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
        if (dataBits[i] === '1') {
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

const filterByDigit = (data, i, most) => {
    let ones = 0;
    let goodDigit;
    let inputLength = data.length;

    for (let d of data) {
        if (d[i] === '1') {
            ones++;
        }
    }

    if (most) {
        if (ones >= inputLength / 2) {
            goodDigit = '1';
        } else {
            goodDigit = '0';
        }
    } else {
        if (ones >= inputLength / 2) {
            goodDigit = '0';
        } else {
            goodDigit = '1';
        }
    }

    return data.filter(d => d[i] === goodDigit);
}

let oxygenData = data;

for (let i = 0; i < data[0].length; i++) {
    oxygenData = filterByDigit(oxygenData, i, true);
    if (oxygenData.length === 1) break;
}

let co2Data = data;

for (let i = 0; i < data[0].length; i++) {
    co2Data = filterByDigit(co2Data, i, false);
    if (co2Data.length === 1) break;
}

const co2Val = parseInt(co2Data[0], 2);
const oxygenVal = parseInt(oxygenData[0], 2);

console.log(oxygenVal, co2Val, oxygenVal * co2Val);




