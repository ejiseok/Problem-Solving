function solution(my_string, num1, num2) {
  let ch1 = my_string[num1];
  let ch2 = my_string[num2];

  return my_string.slice(0, num1) + ch2 + my_string.slice(num1 + 1, num2) + ch1 + my_string.slice(num2 + 1);
}