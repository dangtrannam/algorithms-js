// Given a string, find the first unique character in it and return its index. If it doesn't exist, return -1.
// You may assume the string contains only lowercase English letters.

// Examples (input -> expected output)
const examples = [
  { input: "leetcode", expected: 0 },
  { input: "loveleetcode", expected: 2 },
  { input: "aabb", expected: -1 },
  { input: "z", expected: 0 },
  { input: "aaabcccde", expected: 3 },
  { input: "swiss", expected: 1 },
];

function firstUniqChar(str) {
  let looker = {};

  for (let n of str) {
    looker[n] = ++looker[n] || 1;
  }

  for (let key of Object.keys(looker)) {
    if (looker[key] === 1) return str.indexOf(key);
  }

  return -1;
}

// Alternate solutions below.

// 1) Two-pass: counts using an array of size 26 (faster for lowercase letters)
function firstUniqCharArray26(s) {
  const counts = new Array(26).fill(0);
  const aCode = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - aCode]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (counts[s.charCodeAt(i) - aCode] === 1) return i;
  }

  return -1;
}

// 2) Two-pass Map: count then iterate original string to preserve ordering
function firstUniqCharTwoPass(s) {
  const map = new Map();
  for (let ch of s) map.set(ch, (map.get(ch) || 0) + 1);

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }

  return -1;
}

// 3) Queue / one-pass: good when reading a stream and wanting the "first unique so far"
function firstUniqCharQueue(s) {
  const counts = {};
  const q = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    counts[ch] = (counts[ch] || 0) + 1;

    if (counts[ch] === 1) {
      q.push(i); // index of a candidate unique char
    }

    // Clean up queue's front if it is no longer unique
    while (q.length > 0 && counts[s[q[0]]] > 1) q.shift();
  }

  return q.length ? q[0] : -1;
}

// Test the alternate implementations
const impls = {
  original: firstUniqChar,
  twoPassMap: firstUniqCharTwoPass,
  array26: firstUniqCharArray26,
  queueOnePass: firstUniqCharQueue,
};

console.log('\n--- Alternate implementations tests ---');
Object.entries(impls).forEach(([name, fn]) => {
  console.log('\nTesting', name);
  examples.forEach(({ input, expected }) => {
    const result = fn(input);
    console.log(
      name,
      input,
      '=>',
      result,
      '(expected:',
      expected + ')',
      result === expected
    );
  });
});
