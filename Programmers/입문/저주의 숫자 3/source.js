function solution(n) {
  const arr = [];

  let i = 0;
  while (true) {
    const ns = i.toString().split('');
    if (i % 3 !== 0 && !ns.includes('3')) arr.push(i);
  }

  return arr[n - 1];
}