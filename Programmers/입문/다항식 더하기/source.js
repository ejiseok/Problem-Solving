function solution(polynomial) {
  let answer = '';
  let terms = polynomial.split(' + ');
  let x = 0;
  let constant = 0;
  
  for (let term of terms) {
    if (term === 'x') x++;
    else if (term.at(-1) === 'x') {
      x += Number(term.slice(0, term.length - 1));
    } else {
      constant += Number(term);
    }
  }

  if (x === 0 && constant === 0) {
    answer = '0';
  } else if (x !== 0 && constant === 0) {
    answer = (x === 1) ? `x` : `${x}x`;
  } else if (x === 0 && constant !== 0) {
    answer = `${constant}`;
  } else {
    answer = (x === 1) ? `x + ${constant}` : `${x}x + ${constant}`;
  }

  return answer;
}

console.log(solution('x + 5'));