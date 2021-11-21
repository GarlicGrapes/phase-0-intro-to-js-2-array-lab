// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop()
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats;
}

function appendCat(name) {
    const temp = [...cats, name];
    return temp;
}

function prependCat(name) {
    const temp = [name, ...cats];
    return temp;
}

function removeLastCat() {
    return cats.slice(0,-1);
}

function removeFirstCat() {
    const temp = [...cats];
    temp.shift();
    return temp;
}