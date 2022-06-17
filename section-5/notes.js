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

console.log(same([1,2,3,2,3],[1,4,9,4,9]))