/*Write a program that prompts the user for five numbers
and prints them in the reverse order they were entered.
Print the result to the console.(2p)*/

const nums_list = [];
let numbers;

do {
  numbers = parseInt(prompt('Enter the numbers! '));
  nums_list.push(numbers);


} while (nums_list.length < 5);

for (i = nums_list.length - 1; i >= 0; i--) {
  console.log(nums_list[i]);

}
