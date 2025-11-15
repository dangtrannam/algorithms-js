function fib(num, memo = []) {
  if (num <= 2) return 1;
  if (memo[num]) return memo[num];
  
  memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
  return memo[num];
}

const start = performance.now();
console.log(fib(200)) // 55
const end = performance.now();
console.log(`Execution time: ${(end - start).toFixed(2)} ms`)