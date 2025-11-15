// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback){
  if (arr.length === 1) return callback(arr[0]);
  if (arr.length === 0) return false;

  return callback(arr[0]) || someRecursive(arr.slice(1), callback);
}

console.log(someRecursive([1,2,3,4], val => val % 2 !== 0)) // true
console.log(someRecursive([4,6,8], val => val > 10)) // false