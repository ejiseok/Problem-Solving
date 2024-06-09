function solution(my_string, letter) {
  var answer = '';

  for (let ch of my_string) {
    if (ch !== letter) {
      answer += ch;
    }
  }

  return answer;
}