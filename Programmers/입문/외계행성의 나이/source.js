function solution(age) {
  var answer = '';

  while (age !== 0) {
    answer = String.fromCharCode(age % 10 + 97) + answer;
    age = Math.floor(age / 10);
  }

  return answer;
}