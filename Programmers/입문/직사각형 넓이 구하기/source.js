function solution(dots) {
  let height = null;
  let width = null;

  let x = dots[0][0];
  for (let i = 1; i < dots.length; i++) {
    if (dots[i][0] === x) {
      height = Math.abs(dots[0][1] - dots[i][1]);
      break;
    }
  }
  // console.log(height);

  let y = dots[0][1];
  for (let i = 1; i < dots.length; i++) {
    if (dots[i][1] === y) {
      width = Math.abs(dots[0][0] - dots[i][0]);
      break;
    }
  }
  // console.log(width);

  return height * width;
}

// console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]]));