const fs = require("fs")

const data = fs.readFileSync("../input/input8.txt", "utf-8").split('\n')
// const data = fs.readFileSync("../input/dummy.txt", "utf-8").split('\n')

//--------------------------------------------------------------------------------------\\
console.log("Part 1: ")

let total = 0;

for (let line of data) {
    let [_, numbers] = line.split(" | ");
    for (let number of numbers.split(" ")) {
        number = number.trim()
        if (number.length === 2 || number.length === 3 || number.length === 4 || number.length === 7) {
            total++;
        }
    }
}

console.log(total);

console.log("--------------------------------------------------------------------------------------------------------")
//--------------------------------------------------------------------------------------\\
console.log("Part 2: ")

const decode = (set) => {
    let result = {
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: ''
    }

    let midTopLeft = ['a', 'b', 'c', 'd', 'e', 'f', 'g'].filter(lett => set.four.indexOf(lett) >= 0 && set.one.indexOf(lett) < 0);

    for (let letter of set.seven) {
        if (set.one.indexOf(letter) < 0) {
            result.a = letter;
            break;
        }
    }

    for (let i = 0; i < set.others5.length; i++) {
        let fiver = set.others5[i];
        if (fiver.indexOf(midTopLeft[0]) >= 0 && fiver.indexOf(midTopLeft[1]) >= 0) {
            set.five = fiver;
            set.others5.splice(i, 1);
        }
    }

    for (let letter of set.five) {
        if (set.one.indexOf(letter) < 0 && set.four.indexOf(letter) < 0 && set.seven.indexOf(letter) < 0) {
            result.d = letter;
            break;
        }
    }

    let [first, second] = set.others5;
    if (first.indexOf(set.one[0]) >= 0 && first.indexOf(set.one[1]) >= 0) {
        set.three = first;
        set.two = second;
        set.others5 = []
    } else {
        set.three = second;
        set.two = first;
        set.others5 = []
    }

    for (let lett of set.two) {
        if (set.three.indexOf(lett) < 0) {
            result.c = lett;
            break;
        }
    }

    for (let lett of set.three) {
        if (set.two.indexOf(lett) < 0) {
            result.e = lett;
            break;
        }
    }

    if (set.one[0] === result.e) {
        result.f = set.one[1];
    } else {
        result.f = set.one[0];
    }

    for (let lett of set.three) {
        if (lett !== result.d && set.seven.indexOf(lett) < 0) {
            result.g = lett;
        }
    }

    for (let lett of set.four) {
        if (lett !== result.g && set.one.indexOf(lett) < 0) {
            result.b = lett;
        }
    }

    for (let digit of set.others6) {
        if (digit.indexOf(result.g) < 0) {
            set.zero = digit;
            break;
        }
    }

    for (let digit of set.others6) {
        if (digit.indexOf(result.f) < 0) {
            set.six = digit;
            break;
        }
    }

    for (let digit of set.others6) {
        if (digit.indexOf(result.c) < 0) {
            set.nine = digit;
            break;
        }
    }

    set.others6 = []
    return set;
}

const areTheSame = (a, b) => {
    if (a.length !== b.length) return false;
    for (let lett of a) if (b.indexOf(lett) < 0) return false;
    for (let lett of b) if (a.indexOf(lett) < 0) return false;
    return true;
}

let set = {
    zero: '',
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: '',
    eight: '',
    nine: '',
    others5: [],
    others6: []
}

let total2 = 0;
let all = []

for (let line of data) {
    let [decoding, numbers] = line.split(" | ");
    let decod = decoding.split(" ");

    for (let d of decod) {
        d = d.trim();
        if (d.length === 2) {
            set.one = d;
        }
        if (d.length === 3) {
            set.seven = d;
        }
        if (d.length === 4) {
            set.four = d;
        }
        if (d.length === 5) {
            set.others5.push(d)
        }
        if (d.length === 6) {
            set.others6.push(d)
        }
        if (d.length === 7) {
            set.eight = d;
        }
    }

    set = decode(set)
    let sum = 0;
    for (let number of numbers.split(" ")) {
        let lis = Object.values(set);
        for (let i = 0; i < lis.length; i++) {
            let s = lis[i];
            let boo = areTheSame(s, number.trim());
            if (boo) {
                sum *= 10;
                sum += i;
                break;
            }
        }
    }
    
    total2 += sum;
    all.push(sum)
}

console.log(all, total2);