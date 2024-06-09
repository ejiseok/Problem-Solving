function solution(array) {
  let answer = 0;

  for (let item of array) {
    for (let ch of String(item)) {
      if (ch === '7') answer++;
    }
  }

  return answer;
}