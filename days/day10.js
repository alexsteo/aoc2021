const fs = require("fs")

const data = fs.readFileSync("../input/input10.txt", "utf-8").split('\n')
// const data = fs.readFileSync("../input/dummy.txt", "utf-8").split('\n')

//--------------------------------------------------------------------------------------\\
console.log("Part 1: ")
let stack = [];
let oBrackets = ['(', "[", "{", "<"];
let cBrackets = [')', "]", "}", ">"];
let scoreBrackets = [3, 57, 1197, 25137];
let score = 0;

for (let [index, line] of data.entries()) {
    for (let l of line) {
        if (oBrackets.indexOf(l) >= 0) {
            stack.push(l);
        }
        let i = cBrackets.indexOf(l);
        if (i >= 0) {
            if (stack[stack.length - 1] === oBrackets[i]) {
                stack.pop();
            }
            else {
                console.log(index, i, stack[stack.length - 1], l)
                score += scoreBrackets[i];
                break;
            }
        }
    }
}

console.log(score);

console.log("--------------------------------------------------------------------------------------------------------")
//--------------------------------------------------------------------------------------\\
console.log("Part 2: ")

let stack2 = [];
let scores = [];

for (let [index, line] of data.entries()) {
    stack2 = [];
    let good = true;
    for (let l of line) {
        if (oBrackets.indexOf(l) >= 0) {
            stack2.push(l);
        }
        let i = cBrackets.indexOf(l);
        if (i >= 0) {
            if (stack2[stack2.length - 1] === oBrackets[i]) {
                stack2.pop();
            }
            else {
                good = false;
                break;
            }
        }
    }

    if (good) {
        stack2.reverse();
        let tempScore = 0;
        for (let elem of stack2) {
            let idx = oBrackets.indexOf(elem);
            tempScore *= 5;
            tempScore += (idx + 1);
        }
        scores.push(tempScore);
    }
}

scores = scores.sort((left, right) => left - right);
console.log(scores[(scores.length - 1) / 2]);
console.log(scores)