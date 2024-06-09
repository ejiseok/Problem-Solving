function solution(s1, s2) {
  let answer = 0;

  for (let w1 of s1) {
    for (let w2 of s2) {
      if (w1 === w2) {
        answer++;
        break;
      }
    }
  }

  return answer;
}