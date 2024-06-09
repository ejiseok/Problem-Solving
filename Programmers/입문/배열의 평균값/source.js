function solution(numbers) {
  var answer = 0;
  numbers.forEach(num => answer += num);
  answer = answer / numbers.length;
  return answer;
}