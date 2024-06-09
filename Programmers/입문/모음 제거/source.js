function solution(my_string) {
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === 'a' ||
        my_string[i] === 'e' ||
        my_string[i] === 'i' ||
        my_string[i] === 'o' ||
        my_string[i] === 'u') {
      my_string = my_string.slice(0, i) + my_string.slice(i + 1);
      i--;
    }
  }

  return my_string;
}