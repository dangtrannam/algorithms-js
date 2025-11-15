function sortedFrequency(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle = Math.floor((left + right) / 2);
    let leftIndex = -1;
    let rightIndex = -1;

    while (left <= right) {
        if (nums[middle] === target) {
            leftIndex = middle;
            right = middle - 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }

        middle = Math.floor((left + right) / 2);
    }

    left = 0;
    right = nums.length - 1;
    middle = Math.floor((left + right) / 2);
    while (left <= right) {
        if (nums[middle] === target) {
            rightIndex = middle;
            left = middle + 1;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }

        middle = Math.floor((left + right) / 2);
    }

    if (leftIndex === -1 || rightIndex === -1) return -1;
    return rightIndex - leftIndex + 1;
}

// console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4 
// console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1 
// console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2 
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1