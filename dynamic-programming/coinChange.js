/**
 * Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.

Examples:

const denominations = [1, 5, 10, 25]
 
coinChange(denominations, 1) // 1
coinChange(denominations, 2) // 1
coinChange(denominations, 5) // 2
coinChange(denominations, 10) // 4
coinChange(denominations, 25) // 13
coinChange(denominations, 45) // 39
coinChange(denominations, 100) // 242
coinChange(denominations, 145) // 622
coinChange(denominations, 1451) // 425663
coinChange(denominations, 14511) // 409222339
 */

function coinChange(denominations, value, start = 0, memo = {}) {
  // memoKey must include the start index to differentiate subproblems
  const memoKey = start + '|' + value;
  if (memoKey in memo) return memo[memoKey];

  if (value === 0) return 1;
  if (value < 0) return 0;

  let totalWays = 0;
  // iterate from `start` so we only build combinations (non-decreasing coin indices)
  for (let i = start; i < denominations.length; i++) {
    const coin = denominations[i];
    totalWays += coinChange(denominations, value - coin, i, memo);
  }

  memo[memoKey] = totalWays;
  return totalWays;
}

// Bottom-up dynamic programming (tabulation) implementation
function coinChangeTabulation(denominations, value) {
  // ways[i] = number of ways to make amount i
  const ways = new Array(value + 1).fill(0);
  ways[0] = 1;

  // for each coin, update the ways for all amounts >= coin
  for (let i = 0; i < denominations.length; i++) {
    const coin = denominations[i];
    for (let amt = coin; amt <= value; amt++) {
        
        ways[amt] += ways[amt - coin];
        console.log(`Processing amount ${amt} with coin ${coin}, ways[${amt}] = ${ways[amt]} `);
    }
    console.log(`After processing coin ${coin}, ways:`, ways);
    
  }

  return ways[value];
}

const denominations = [1, 5, 10, 25];

// console.log(coinChange([1,5], 6)) // 2
console.log(coinChangeTabulation([1,5], 6)) // 2 (tabulation)
// console.log(coinChange(denominations, 1)) // 1
// console.log(coinChange(denominations, 2)) // 1
// console.log(coinChange(denominations, 5)) // 2
// console.log(coinChange(denominations, 10)) // 4
// console.log(coinChange(denominations, 25)) // 13
// console.log(coinChange(denominations, 45)) // 39
// console.log(coinChange(denominations, 100)) // 242
// console.log(coinChange(denominations, 145)) // 622
// console.log(coinChange(denominations, 1451)) // 425663
// console.log(coinChange(denominations, 14511)) // 409222339