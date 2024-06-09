function isWordNum(word) {
  switch (word) {
    case "zero": return 0;
    case "one": return 1;
    case "two": return 2;
    case "three": return 3;
    case "four": return 4;
    case "five": return 5;
    case "six": return 6;
    case "seven": return 7;
    case "eight": return 8;
    case "nine": return 9;
  }
  return false;
}

function solution(numbers) {
  let answer = 0;
  let word = '';

  for (let ch of numbers) {
    word += ch;

    if (isWordNum(word) !== false) {
      answer = answer * 10 + isWordNum(word);
      word = '';
    }
  }

  return answer;
}