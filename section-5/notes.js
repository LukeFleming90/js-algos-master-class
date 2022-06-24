function same(arr1,arr2) {

    if(arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(key in frequencyCounter1) {

        let keyNum = parseInt(key)

        if(!(keyNum ** 2 in frequencyCounter2)) {
            return false
        }

        if(frequencyCounter1[keyNum] !== frequencyCounter2[keyNum ** 2]) {
            return false
        }

    }

    return true;

}

// console.log(same([1,2,3,2,3],[1,4,9,4,9]))

function anagramCheck(str1,str2) {

    if(str1.length !== str2.length) {
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for(let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(let key in frequencyCounter1) {
        if(frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false
        }
    }

    return true

}

// console.log(anagramCheck('aaz','zza'))
// console.log(anagramCheck('rat','car'))
// console.log(anagramCheck('qwerty','qeywrt'))
// console.log(anagramCheck('',''))
// console.log(anagramCheck('anagram','nagaram'))
// console.log(anagramCheck('awesome','awesom'))
// console.log(anagramCheck('texttwisttime','timetwisttext'))

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right]
        if(sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

function countUniqueValues(arr) {
    if(arr.length === 0) return 0
    var i = 0;
    for(var j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}


console.log(countUniqueValues([1,1,1,2,2,3,4,5,5,5,6,7]))

// Sliding Window

function maxSubarraySum(arr,num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))

// Binary Search

function search(array, val) {

    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentEelement = array[middle];

        if(array[middle] < val) {
            min = middle + 1
        }

        else if(array[middle] > val) {
            max = middle - 1
        }

        else {
            return middle
        }
    }

    return -1;

}
