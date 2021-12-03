const fs = require("fs")

const data = fs.readFileSync("../input/input2.txt", "utf-8").split('\n');


//--------------------------------------------------------------------------------------\\

input = data.map(elem => [dir, dist] = elem.split(" "))
let depth = 0;
let distance = 0;

for (let [dir, dist] of input) {
    dist = parseInt(dist)
    if (dir == 'forward') {
        distance += dist;
    }
    if (dir == 'up') {
        depth -= dist;
    }
    if (dir == 'down') {
        depth += dist;
    }
}

console.log(depth, distance, depth * distance);


//--------------------------------------------------------------------------------------\\

depth = 0;
distance = 0;
let aim = 0;

for (let [dir, dist] of input) {
    dist = parseInt(dist)
    if (dir == 'forward') {
        distance += dist;
        depth += aim * dist;
    }
    if (dir == 'up') {
        aim -= dist;
    }
    if (dir == 'down') {
        aim += dist;
    }
}

console.log(depth, distance, depth * distance);