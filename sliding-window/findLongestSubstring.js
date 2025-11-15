function findLongestSubstring(str) {
  if (!str.length) return 0;

  let start = 0;
  let maxLength = 0;
  let charSet = new Set();

  for (let end = 0; end < str.length; end++) {
    while (charSet.has(str[end])) {
      charSet.delete(str[start]);
      start++;
    }
    charSet.add(str[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// console.log(findLongestSubstring('')) // 0
// console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring('thisisawesome')) // 6
// console.log(findLongestSubstring('thecatinthehat')) // 7
// console.log(findLongestSubstring('bbbbbb')) // 1
// console.log(findLongestSubstring('longestsubstring')) // 8
// console.log(findLongestSubstring('thisishowwedoit')) // 6
