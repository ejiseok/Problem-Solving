function solution(quiz) {
  let answer = [];

  for (let q of quiz) {
    let problem = q.split(' = ')[0].split(' ');
    let presentedAnswer = Number(q.split(' = ')[1]);
    let actualAnswer;

    if (problem[1] === '+') {
      actualAnswer = Number(problem[0]) + Number(problem[2]);
    } else {
      actualAnswer = Number(problem[0]) - Number(problem[2]);
    }

    if (presentedAnswer === actualAnswer) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  }

  return answer;
}

// console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));