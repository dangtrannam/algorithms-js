function findAllDuplicates(arr){
  if (arr.length === 0) return null;
  
  let looker = {}
  
  for (let n of arr) {
      looker[n] = ++looker[n] || 1;
  }
  
  let result = [];
  for (let kv of Object.entries(looker)) {
      if (kv[1] >= 2) result.push(parseInt(kv[0]));
  }
  
  return result;
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1])) // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])) // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // array with 3, 2, and 1