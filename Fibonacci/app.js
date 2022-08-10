function fib(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  console.log(memo);
  return res;
}

console.log(fib(3));
