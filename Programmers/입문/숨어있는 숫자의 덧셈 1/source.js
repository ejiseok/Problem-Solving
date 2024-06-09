function solution(my_string) {
  let answer = 0;

  for (let ch of my_string) {
    if (!isNaN(ch)) answer += Number(ch);
  }

  return answer;
}