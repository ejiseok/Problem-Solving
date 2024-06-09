function solution(array) {
  var answer = 0;
  var ht = {};
  var mostFreqValue = 0;
  var mostFreqKey = null;

  for (num of array) {
    if (num in ht) {
      ht[num]++;
    } else {
      ht[num] = 1;
    }
  }

  // console.log(ht);

  for (let key in ht) {
    if (mostFreqValue === ht[key]) {
      answer = -1;
    } else if (mostFreqValue < ht[key]) {
      answer = 0;
      mostFreqValue = ht[key];
      mostFreqKey = key;
    }
  }

  if (answer !== -1) {
    answer = Number(mostFreqKey);
  }

  return answer;
}

// console.log(solution([1, 2, 3, 3, 3, 4]));