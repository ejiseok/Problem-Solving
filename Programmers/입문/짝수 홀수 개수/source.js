function solution(num_list) {
  var answer = [];
  var odd = 0;
  var even = 0;

  for (num of num_list) {
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  answer.push(even);
  answer.push(odd);

  return answer;
}