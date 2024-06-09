function solution(n) {
  let answer = [];
  let div = 2;

  while (n >= 2) {
    if (n % div === 0) {
      if (!answer.includes(div)) answer.push(div);
      n = n / div
    } else {
      div++;
    }
  }

  return answer;
}