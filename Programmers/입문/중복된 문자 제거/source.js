function solution(my_string) {
  let answer = '';
  let dup = '';

  for (let ch of my_string) {
    if (!dup.includes(ch)) {
      answer += ch;
      dup += ch;
    }
  }

  return answer;
}