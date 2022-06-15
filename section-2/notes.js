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

/*

Big O Shorthands

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

Big O Values

O(n^2)
O(n log n)
O(n)
O(log n)
O(1)

*/

function logAtLeast5(n) {
    for(let i = 1; i <= Math.max(5,n); i++) {
        console.log(i)
    }
}

function logAtMost5(n) {
    for(let i = 1; i <= Math.min(5,n); i++) {
        console.log(i)
    }
}

logAtLeast5(10);
logAtMost5(10);