const fs = require("fs")

const data = fs.readFileSync("../input/input12.txt", "utf-8").split('\n')
// const data = fs.readFileSync("../input/dummy.txt", "utf-8").split('\n')

//--------------------------------------------------------------------------------------\\
console.log("Part 1: ")

let nodes = [];
let visited = [];
for (let line of data) {
    const [a, b] = line.split("-");

    let filteredForA = nodes.filter(n => n.key === a)
    if (filteredForA.length !== 0) {
        filteredForA[0].neigh.push(b);
    } else {
        nodes.push({ key: a, neigh: [b] });
    }

    let filteredForB = nodes.filter(n => n.key === b)
    if (filteredForB.length !== 0) {
        filteredForB[0].neigh.push(a);
    } else {
        nodes.push({ key: b, neigh: [a] });
    }
}

const visit = (nodes, node, visited, paths, path) => {
    let p = path;
    for(let n of node.neigh) {
        // console.log(path, n)
        if((n === 'start' && p.length > 0) || (p.indexOf(n) >= 0 && new RegExp('[a-z]').test(n))) {
            continue;
        }
        if(n === 'end') {
            paths += 1;
            console.log(path + "-->" + 'end');
            continue;
        }
        pa = path + "-->" + n;
        paths = visit(nodes, nodes.filter(no => no.key === n)[0], visited, paths, pa);
    }

    return paths
}

console.log(nodes)
let start = nodes.filter(n => n.key === 'start')[0];
const paths = visit(nodes,start, [], 0, "start");
console.log(paths)


console.log("--------------------------------------------------------------------------------------------------------")
//--------------------------------------------------------------------------------------\\
console.log("Part 2: ")

