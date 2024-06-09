function solution(my_string) {
  let answer = [];
  
  for (let ch of my_string) {
    if (!isNaN(ch)) {
      answer.push(Number(ch));
    }
  }

  answer.sort();
  
  return answer;
}