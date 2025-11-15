function constructNote(s, t) {
  if (t.length < s.length) return false;
  let looker = {}
  
  for (let c of t) {
      looker[c] = ++looker[c] || 1;
  }
  
  for (let c of s) {
      if (!looker[c] || looker[c] <= 0) return false;
      looker[c]--;
  }
  
  return true;
}

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true
console.log(constructNote('aaa', 'aa')) // false
console.log(constructNote('racecar', 'carrace')) // true
console.log(constructNote('hello', 'olleh')) // true
console.log(constructNote('hello', 'olle')) // false
console.log(constructNote('', '')) // true
console.log(constructNote('a', '')) // false
console.log(constructNote('', 'a')) // true