function solution(emergency) {
  var answer = [];
  
  for (let i = 0; i < emergency.length; i++) {
    let e = emergency[i];
    let num = 1;
    
    for (let j = 0; j < emergency.length; j++) {
      if (i === j) continue;
      if (e < emergency[j]) num++;
    }

    answer.push(num);
  }

  return answer;
}