function solution(n) {
  let num = 1;
  let cnt = 1;

  while (cnt < n) {
    num++;
    if (num.toString().split('').includes('3') || num % 3 === 0) {
      continue;
    } else {
      cnt++;
    }
  }

  return num;
}