function solution(n) {
  let answer = 0;

  if (n < 4) return 0;

  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < Math.floor(i / 2) + 1; j++) {
      if (i % j === 0) {
        answer++;
        break;
      }
    }
  }

  return answer;
}

// console.log(solution(10));