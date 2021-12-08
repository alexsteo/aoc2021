const fs = require("fs")

const data = fs.readFileSync("../input/input5.txt", "utf-8").split('\n')
// const data = fs.readFileSync("../input/dummy.txt", "utf-8").split('\n')

//--------------------------------------------------------------------------------------\\
console.log("Part 1: ")
let input = data.map(elem => {
    let elems = elem.split(' -> ');
    let ret = elems[0].split(",").concat(elems[1].split(","))
    return ret.map(e => parseInt(e))

})
let input1 = input.filter(e => e[0] === e[2] || e[1] === e[3]);
let max = 0;
let board = [];

for (let i of input1) {
    for (let j of i) {
        if (j > max) {
            max = j;
        }
    }
}

for (let i = 0; i <= max; i++) {
    let x = []
    for (let j = 0; j <= max; j++) {
        x = x.concat('x');
    }
    board = board.concat([x]);
}
let cross = 0;
for (let [x1, y1, x2, y2] of input1) {
    if (x1 === x2) {
        for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
            if (board[x1][i] === 'x') {
                board[x1][i] = '*';
            } else {
                board[x1][i] = '^';
            }
        }
    }
    if (y1 === y2) {
        for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
            if (board[i][y1] === 'x') {
                board[i][y1] = '*';
            } else {
                board[i][y1] = '^';
            }
        }
    }
}

for (let i = 0; i <= max; i++) {
    for (let j = 0; j <= max; j++) {
        if (board[i][j] === '^') cross++
    }
}

console.log(cross)




console.log("--------------------------------------------------------------------------------------------------------")
//--------------------------------------------------------------------------------------\\
console.log("Part 2: ")

let input2 = data.map(elem => {
    let elems = elem.split(' -> ');
    let ret = elems[0].split(",").concat(elems[1].split(","))
    return ret.map(e => parseInt(e))
});

let max2 = 0;
let board2 = [];

for (let i of input1) {
    for (let j of i) {
        if (j > max2) {
            max2 = j;
        }
    }
}

for (let i = 0; i <= max2; i++) {
    let x = []
    for (let j = 0; j <= max2; j++) {
        x = x.concat('x');
    }
    board2 = board2.concat([x]);
}
let cross2 = 0;
for (let [x1, y1, x2, y2] of input2) {
    if (x1 === x2) {
        for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
            if (board2[x1][i] === 'x') {
                board2[x1][i] = '*';
            } else {
                board2[x1][i] = '^';
            }
        }
    }
    if (y1 === y2) {
        for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
            if (board2[i][y1] === 'x') {
                board2[i][y1] = '*';
            } else {
                board2[i][y1] = '^';
            }
        }
    }

    if (x1 - x2 === y1 - y2) {
        for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
            if (board2[i][i - x1 + y1] === 'x') {
                board2[i][i - x1 + y1] = '*';
            } else {
                board2[i][i - x1 + y1] = '^';
            }
        }
    }

    if (x1 + y1 === x2 + y2) {
        for (let i = Math.max(x1, x2); i >= Math.min(x1, x2); i--) {
            if (board2[i][x1 + y1 - i] === 'x') {
                board2[i][x1 + y1 - i] = '*';
            } else {
                board2[i][x1 + y1 - i] = '^';
            }
        }
    }
}

for (let i = 0; i <= max; i++) {
    for (let j = 0; j <= max; j++) {
        if (board2[i][j] === '^') cross2++
    }
}

console.log(cross2)

