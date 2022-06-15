const reverseString = (word) => {
    let newWord = ''
    for(let i = word.length - 1; i >= 0; i--) {
        newWord += word[i]
    }
    return newWord
}

console.log(reverseString('luke'))

function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

function addUpToComplex(n) {
    return n * (n + 1) / 2
}

let t1 = performance.now()
addUpToComplex(1000000000)
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds.`)