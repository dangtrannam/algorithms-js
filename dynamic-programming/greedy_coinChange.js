function minCoinChange(coins, amount) {
  // Basic validation
  if (!Array.isArray(coins) || coins.length === 0) return [];
  if (typeof amount !== 'number' || amount <= 0) return [];

  // Greedy approach: sort coins descending and take as many of each as possible
  const sorted = [...coins].filter(c => typeof c === 'number' && c > 0).sort((a, b) => b - a);
  let remaining = amount;
  const result = [];

  for (const coin of sorted) {
    if (remaining <= 0) break;
    const count = Math.floor(remaining / coin);
    
    for (let i = 0; i < count; i++) result.push(coin);
    
    remaining -= count * coin;
  }

  // If exact change wasn't possible, return empty array (could also throw or return null)
  if (remaining !== 0) return [];
  return result;
}

console.log(minCoinChange([1, 2, 3, 4, 5], 11)); // expected: [5, 5, 1]
