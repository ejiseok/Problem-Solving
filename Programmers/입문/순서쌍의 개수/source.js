function solution(n) {
  if (n === 1) return 1;

  let answer = 2;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) answer++;
  }

  return answer;
}