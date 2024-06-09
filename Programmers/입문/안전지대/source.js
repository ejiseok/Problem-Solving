function solution(board) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  const n = board.length;

  const mine = [];
  let answer = n * n;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        mine.push([i, j]);
        answer--;
      }
    }
  }

  if (answer === 0) return 0;

  mine.forEach((m) => {
    for (let i = 0; i < 8; i++) {
      const x = m[0] + dx[i];
      const y = m[1] + dy[i];
      
      if (x >= 0 && y >= 0 && x < n && y < n && board[x][y] === 0) {
        board[x][y] = 1;
        answer--;
      }
    }
  });

  return answer;
}