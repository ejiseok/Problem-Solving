function solution(array, height) {
  var answer = 0;

  for (h of array) {
    if (h > height) answer++
  }

  return answer;
}