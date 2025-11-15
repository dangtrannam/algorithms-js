/*
Task Description: Implement the getFlattenedLength function that calculates the total number of elements in a nested array structure without actually flattening it.
 
Your function should:
 
- Accept a nested array of any depth containing numbers and/or other arrays
- Count all primitive elements (non-array values) that would exist if the array were completely flattened
- Handle arbitrary nesting levels - arrays can be nested as deeply as needed
- Return the total count as a number
*/

function getFlattenedLength(data) {
    if (data.length === 0) return 0;

    let counting = 0;

    function helper(item) {
        if (Array.isArray(item)) {
            for (let i = 0; i < item.length; i++) {
                helper(item[i]);
            }
        } else {
            counting += 1;
        }
    }

    for (let i = 0; i < data.length; i++) {
        helper(data[i]);
    }

    return counting;
}
 
// console.log(getFlattenedLength([1, [2, 3]])) // 3
// console.log(getFlattenedLength([1, [2, [3, 4]]])) // 4
// console.log(getFlattenedLength([1, [2, [3, [4, [5, 6]]]]])) // 6
// console.log(getFlattenedLength([1, [2], 1, [2], 1])) // 5

// Iterative version (stack-based) - avoids recursion and deep call stacks
function getFlattenedLengthIterative(data) {
    if (!Array.isArray(data) || data.length === 0) return 0;

    let count = 0;
    const stack = [...data]; // copy top-level items

    while (stack.length) {
        const item = stack.pop();
        if (Array.isArray(item)) {
            // push inner items onto the stack for further processing
            for (let i = 0; i < item.length; i++) {
                stack.push(item[i]);
            }
        } else {
            count += 1;
        }
    }

    return count;
}

// Compare outputs for the sample inputs
const samples = [
    [1, [2, [3, 4]]],
    [1, [2, [3, [4, [5, 6]]]]],
    [1, [2], 1, [2], 1]
];

for (const s of samples) {
    console.log('recursive:', getFlattenedLength(s), 'iterative:', getFlattenedLengthIterative(s));
}