function solution(array) {
  var answer = 0;

  array.sort((a, b) => a - b);
  answer = array[Math.floor(array.length / 2)];

  return answer;
}

// solution([5, -3, 8, 1, -2, 0]);