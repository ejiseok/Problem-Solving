function solution(array) {
  let answer = [];
  let index = -1;
  let num = -1;

  for (let i = 0; i < array.length; i++) {
    if (num < array[i]) {
      num = array[i];
      index = i;
    }
  }

  answer.push(num, index);

  return answer;
}