// Unorder of Operations
// Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.

// For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.

// Valid operators are +, -, *, /, and %.

function evaluate(numbers, operators) {
  console.log(numbers, operators);
  let result = numbers[0];
  let counter = 0;
  for (let i = 1; i <= numbers.length - 1; i++) {
    let op = operators[(i - 1) % operators.length];
    // take the first and second
    // console.log(numbers[i], numbers[i + 1])
    // result = result operators[] numbers[i];
    switch (op) {
      case '+':
        result = result + numbers[i];
        break;
      case '-':
        result = result - numbers[i];
        break;
      case '*':
        result = result * numbers[i];
        break;
      case '/':
        result = result / numbers[i];
        break;
      case '%':
        result = result % numbers[i];
        break;
    }
  }

  return result;
}
