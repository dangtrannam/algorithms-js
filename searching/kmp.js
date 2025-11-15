// KMP (Knuth-Morris-Pratt) Substring Search Algorithm

/**
 * Builds the Longest Prefix Suffix (LPS) array for the pattern
 * @param {string} pattern - The pattern string
 * @returns {number[]} LPS array
 */
function buildLPS(pattern) {
  const lps = new Array(pattern.length).fill(0);
  let length = 0; // length of the previous longest prefix suffix
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else if (length !== 0) {
      length = lps[length - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }

  return lps;
}

/**
 * Searches for a pattern in a text using KMP algorithm
 * @param {string} text - The text to search in
 * @param {string} pattern - The pattern to search for
 * @returns {number[]} Array of starting indices where pattern is found
 */
function KMPSearch(text, pattern) {
  const result = [];
  const lps = buildLPS(pattern);
  let i = 0; // index for text
  let j = 0; // index for pattern

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      result.push(i - j); // found pattern at index i - j
      j = lps[j - 1]; // get next possible match
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return result;
}

// Example usage
function runKMPExample() {
  const text = "ABABDABACDABABCABAB";
  const pattern = "ABABCABAB";

  console.log("Text:", text);
  console.log("Pattern:", pattern);

  const indices = KMPSearch(text, pattern);

  if (indices.length > 0) {
    console.log("Pattern found at indices:", indices);
    indices.forEach((index) => {
      console.log(
        `Found at position ${index}: "${text.substring(
          index,
          index + pattern.length
        )}"`
      );
    });
  } else {
    console.log("Pattern not found in the text.");
  }
}

// Another example with multiple occurrences
function runMultipleOccurrencesExample() {
  const text = "AAAAA";
  const pattern = "AA";

  console.log("\nText:", text);
  console.log("Pattern:", pattern);

  const indices = KMPSearch(text, pattern);
  console.log("Pattern found at indices:", indices);
}

// Example with no match
function runNoMatchExample() {
  const text = "HELLO WORLD";
  const pattern = "XYZ";

  console.log("\nText:", text);
  console.log("Pattern:", pattern);

  const indices = KMPSearch(text, pattern);
  if (indices.length === 0) {
    console.log("Pattern not found in the text.");
  }
}

// Run examples
console.log("=== KMP Substring Search Examples ===\n");
runKMPExample();
runMultipleOccurrencesExample();
runNoMatchExample();
