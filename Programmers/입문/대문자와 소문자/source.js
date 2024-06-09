function solution(my_string) {
  let answer = '';

  for (let ch of my_string) {
    if ('A' <= ch && ch <= 'Z') {
      answer += ch.toLowerCase();
    } else {
      answer += ch.toUpperCase();
    }
  }

  return answer;
}