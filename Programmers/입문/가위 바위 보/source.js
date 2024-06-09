function solution(rsp) {
  let answer = '';

  for (let ch of rsp) {
    if (ch === '2') answer += '0';
    else if (ch === '0') answer += '5';
    else if (ch === '5') answer += '2';
  }

  return answer;
}