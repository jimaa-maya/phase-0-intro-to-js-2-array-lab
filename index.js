const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
 function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
 }

 function appendCat(name) {
    const appendCat = [...cats, "Broom"]
    return appendCat
 }

function prependCat(name) {
    const appendCat = [name, ...cats]
    return appendCat
}
function removeLastCat(name) {
    const removeLastCat = [...cats]; 
    removeLastCat.pop(); 
    return removeLastCat;
}
function removeFirstCat(name) {
    const removeFirstCat = [...cats];
    removeFirstCat.shift();
    return removeFirstCat;
}