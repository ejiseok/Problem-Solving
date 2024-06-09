function solution(my_string, n) {
  var answer = '';

  for (ch of my_string) {
    for (let i = 0; i < n; i++) {
      answer += ch;
    }
  }

  return answer;
}