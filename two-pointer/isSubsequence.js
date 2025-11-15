function isSubsequence(s, t) {
  let start = 0;
  for (let i = 0; i < t.length; i++){
      if (t[i] === s[start]) {
          start++;
      }
  }
  
  if (start < s.length) return false;
  
  return true;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)