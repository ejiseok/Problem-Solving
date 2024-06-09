function solution(s) {
  let answer = 0;
  let prevNum;

  for (let num of s.split(' ')) {
    if (num === 'Z') {
      answer -= prevNum;
    } else {
      answer += Number(num);
      prevNum = Number(num);
    }
  }

  return answer;
}