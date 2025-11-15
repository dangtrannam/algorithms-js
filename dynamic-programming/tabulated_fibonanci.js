function fib(num) {
  if (num <= 2) return 1;

  const table = [0, 1, 1];

  for (let i = 3; i <= num; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }
  return table[num];
}

const start = performance.now();
console.log(fib(200)) // 55
const end = performance.now();
console.log(`Execution time: ${(end - start).toFixed(2)} ms`)