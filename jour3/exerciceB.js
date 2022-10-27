function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const entiers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const fibos = entiers.map(fibonacci);
console.log(fibos.join(", "));

