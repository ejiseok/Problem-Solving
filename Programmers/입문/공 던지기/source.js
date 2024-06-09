function solution(numbers, k) {
  let answer = numbers[(k - 1) * 2 % numbers.length];
  return answer;
}