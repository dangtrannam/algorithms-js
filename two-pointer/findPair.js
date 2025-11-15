function findPair (arr, num) {
    if (!arr.length) return false;
    
    const freq = new Map();
    for (let n of arr) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }
    
    let target = Math.abs(num);
    for (let n of arr) {
        if (target === 0) {
            if (freq.get(n) > 1) return true;
        } else {
            if (freq.has(n + target)) return true;
        }
    }
    
    return false;
}

function findPair2(arr, num) {
    if (!arr.length) return false;
    
    let target = Math.abs(num);
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        while (arr[j] - arr[i] > target && i < j) {
            i++;
        }
        if (i < j && arr[j] - arr[i] === target) {
            return true;
        }
    }
    
    return false;
}

console.log(findPair([6,1,4,10,2,4], 2)) // true
console.log(findPair([8,6,2,4,1,0,2,5,13],1)) // true
console.log(findPair([4,-2,3,10],-6)) // true
console.log(findPair([6,1,4,10,2,4], 22)) // false
console.log(findPair([], 0)) // false
console.log(findPair([5,5], 0)) // true
console.log(findPair([-4,4], -8)) // true
console.log(findPair([-4,4], 8)) // true
console.log(findPair([1,3,4,6],-2)) // true
console.log(findPair([0,1,3,4,6],-2)) // true
console.log(findPair([1,2,3], 0)) // false