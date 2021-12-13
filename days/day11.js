const fs = require("fs")

const data = fs.readFileSync("../input/input11.txt", "utf-8").split('\n')
// const data = fs.readFileSync("../input/dummy.txt", "utf-8").split('\n')

//--------------------------------------------------------------------------------------\\
console.log("Part 1: ")

const testForFlash = (input, flashed, i, j, times) => {
    if (input[i][j] > 9 && flashed.indexOf(i + "_" + j) < 0) {
        input[i][j] = 0;
        times += 1;
        flashed = flashed.concat(i + "_" + j);
    } else {
        return ([input, flashed, times]);
    }
    for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
            if (!!input[i + k] && !!input[i + k][j + l]) {
                input[i + k][j + l]++;
                [input, flashed, times] = testForFlash(input, flashed, i + k, j + l, times)
            }
        }
    }

    return ([input, flashed, times]);
}

let input = [];
let w = data[0].length;
let h = data.length;
let steps = 300;
let times = 0;

for (let d of data) {
    input = input.concat([d.split("").map(e => parseInt(e))])
}

for (let s = 0; s < steps; s++) {

    let flashed = [];

    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            input[i][j]++;
        }
    }
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            [input, flashed, times] = testForFlash(input, flashed, i, j, times)
        }
    }
}
console.log(times)


console.log("--------------------------------------------------------------------------------------------------------")
//--------------------------------------------------------------------------------------\\
console.log("Part 2: ")

let steps2 = 1000000000;
input = []
times = 0;

for (let d of data) {
    input = input.concat([d.split("").map(e => parseInt(e))])
}

for (let s = 0; s < steps2; s++) {
    let flashed = [];

    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            input[i][j]++;
        }
    }
    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            [input, flashed, times] = testForFlash(input, flashed, i, j, times)
        }
    }

    if (flashed.length === 100) {
        console.log(s + 1);
        break;
    }
}