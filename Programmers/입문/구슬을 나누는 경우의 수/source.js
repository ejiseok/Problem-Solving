function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
}

function solution(balls, share) {
  let answer = Math.round(fact(balls) / (fact(balls - share) * fact(share)));
  return answer;
}