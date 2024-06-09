function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

function solution(n) {
  let i = 1;
  
  while (factorial(i) < n) i++;
  if (factorial(i) > n) i--;

  return i;
}