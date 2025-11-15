function flatten(arr){
    let result = [];
    
    if (arr.length === 0) return result;

    if (Array.isArray(arr[0])) {
        result = result.concat(flatten(arr[0]));
    } else {
        result.push(arr[0]);
    }

    return result.concat(flatten(arr.slice(1)));
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]