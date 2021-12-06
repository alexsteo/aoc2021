const fs = require("fs")

// const data = fs.readFileSync("../input/input4.txt", "utf-8").split('\n')
const data = fs.readFileSync("../input/dummy.txt", "utf-8").split('\n')

//--------------------------------------------------------------------------------------\\
console.log("Part 1: ")

numbers = data[0].split(",").map(num => parseInt(num));
let filteredData = data.slice(1).filter(row => row.length !== 0);
let i = 0;
let board = [];
let boards = [];
let winner;
let winnerNumber;
let winnerSum = 0;
for (let row of filteredData) {
    board = board.concat([row.split(" ").map(elem => parseInt(elem)).filter(elem => !isNaN(elem))])
    i++;
    if (i === 5) {
        boards = boards.concat([board]);
        board = [];
        i = 0;
    }
}

for (let num of numbers) {
    for (let board of boards) {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (board[i][j] === num) {
                    board[i][j] = 'x';
                    let good = true;
                    for (let k = 0; k < 5; k++) {
                        if (board[k][j] !== 'x')
                            good = false;
                    }
                    if (good) {
                        winner = board;
                        winnerNumber = num;
                    }
                    good = true;
                    for (let k = 0; k < 5; k++) {
                        if (board[i][k] !== 'x')
                            good = false;
                    }
                    if (good) {
                        winner = board;
                        winnerNumber = num;
                    }
                }
            }
        }

        if (!!winner) {
            break;
        }
    }

    if (!!winner) {
        break;
    }
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (winner[i][j] !== 'x') {
            winnerSum += winner[i][j];
        }
    }
}

console.log(winnerSum, winnerNumber, winnerSum * winnerNumber);



console.log("--------------------------------------------------------------------------------------------------------")
//--------------------------------------------------------------------------------------\\
console.log("Part 2: ")

numbers = data[0].split(",").map(num => parseInt(num));
filteredData = data.slice(1).filter(row => row.length !== 0);
i = 0;
board = [];
boards = [];
winner;
winnerNumber;
winnerSum = 0;
for (let row of filteredData) {
    board = board.concat([row.split(" ").map(elem => parseInt(elem)).filter(elem => !isNaN(elem))])
    i++;
    if (i === 5) {
        boards = boards.concat([board]);
        board = [];
        i = 0;
    }
}
let winnerBds = []
for (let num of numbers) {
    winnerBds = [];
    for (let n = 0; n < boards.length; n++) {
        let board = boards[n];
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (board[i][j] === num) {
                    board[i][j] = 'x';
                    let good = true;
                    for (let k = 0; k < 5; k++) {
                        if (board[k][j] !== 'x')
                            good = false;
                    }
                    if (good) {
                        winnerBds = winnerBds.concat(n);
                        winner = board;
                        winnerNumber = num;
                    }
                    if (!good) {
                        good = true;
                        for (let k = 0; k < 5; k++) {
                            if (board[i][k] !== 'x')
                                good = false;
                        }
                        if (good) {
                            winnerBds = winnerBds.concat(n);
                            winner = board;
                            winnerNumber = num;
                        }
                    }
                }
            }
        }
    }

    let f = 0;

    if (boards.length === 1 && winnerBds.length === 1) {
        winner = boards[0];
        winnerNumber = num;
        break;
    }

    for (let c of winnerBds) {
        boards.splice(c - f, 1);
        f++;
    }
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (winner[i][j] !== 'x') {
            winnerSum += winner[i][j];
        }
    }
}

console.log(winner)

console.log(winnerSum, winnerNumber, winnerSum * winnerNumber);

