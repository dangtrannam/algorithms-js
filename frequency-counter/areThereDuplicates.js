function areThereDuplicates(...args) {
  let arr = [...args].sort();
  
  if (!arr.length) return false;
  
  let i = 0;
  for (let j = 1; j< arr.length; j++) {
      if (arr[i] === arr[j]) return true;
      else {
          i = j;
      }
  }
  
  return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true