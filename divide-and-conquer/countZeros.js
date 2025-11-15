function countZeroes(nums){
    let left = 0;
    let right = nums.length - 1;
    let middle = Math.floor((left + right) / 2);
    let count = 0;

    while (left <= right) {
        if (nums[middle] === 0) {
            count += right - middle + 1;
            right = middle - 1;
        } else {
            left = middle + 1;
        }

        middle = Math.floor((left + right) / 2);
    }

    return count;
}

console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0