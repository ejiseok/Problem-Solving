function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  var numer = numer1 * denom2 + numer2 * denom1;
  var denom = denom1 * denom2;

  var gcd = 0;
  for (let i = 0; i <= numer; i++) {
    if (numer % i === 0 && denom % i === 0) {
      gcd = i;
    }
  }

  answer.push(Math.floor(numer / gcd));
  answer.push(Math.floor(denom / gcd));

  return answer;
}