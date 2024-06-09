function solution(spell, dic) {
  let answer = 2;

  for (let word of dic) {
    let spells = spell.slice();

    for (let i = 0; i < word.length; i++) {
      if (spells.includes(word[i])) {
        const forRemove = spells.indexOf(word[i]);
        spells.splice(forRemove, 1);
      } else {
        break;
      }
    }

    if (spells.length === 0) {
      answer = 1;
      break;
    }
  }

  return answer;
}

// console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));