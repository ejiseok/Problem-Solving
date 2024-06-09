function solution(order) {
  let answer = 0;

  while (order !== 0) {
    let digit = order % 10;
    if (digit === 3 || digit === 6 || digit === 9) answer++;
    order = Math.floor(order / 10);
  }

  return answer;
}