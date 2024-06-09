function solution(array, n) {
  let answer = 101;
  let diff = 100;

  for (let num of array) {
    if (Math.abs(num - n) < diff) {
      answer = num;
      diff = Math.abs(num - n);
    }

    if (diff === Math.abs(num - n) && answer > num) {
      answer = num;
    }
  }

  return answer;
}