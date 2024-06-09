function solution(numbers) {
  let answer = 0;
  let first = numbers[0];
  let second = -1;
  
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > first) {
      second = first;
      first = numbers[i];
      continue;
    }

    if (numbers[i] > second) {
      second = numbers[i];
    }
  }

  answer = first * second;

  return answer;
}