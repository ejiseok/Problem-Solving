function solution(my_string) {
  let list = my_string.split(' ');
  let answer = Number(list[0]);
  let tempOp = null;

  for (let i = 1; i < list.length; i++) {
    if (list[i] === '+' || list[i] === '-') {
      tempOp = list[i];
      continue;
    }

    if (tempOp === '+') {
      answer += Number(list[i]);
    } else {
      answer -= Number(list[i]);
    }
  }

  return answer;
}