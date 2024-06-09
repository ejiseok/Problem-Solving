function solution(keyinput, board) {
  let x = 0;
  let y = 0;

  for (let move of keyinput) {
    if (move === "up") {
      y++;
      if (y > Math.floor(board[1] / 2)) y--;
    } else if (move === "down") {
      y--;
      if (Math.abs(y) > Math.floor(board[1] / 2)) y++;
    } else if (move === "left") {
      x--;
      if (Math.abs(x) > Math.floor(board[0] / 2)) x++;
    } else if (move === "right") {
      x++;
      if (x > Math.floor(board[0] / 2)) x--;
    }
  }

  return [x, y];
}