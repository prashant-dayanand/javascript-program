//Calculate the Fibonacci Series.

function fibonacci(element) {
  const elementContainer = [1, 1];
  for (let i = 2; i < element + 1; i++) {
    elementContainer.push(elementContainer[i - 2] + elementContainer[i - 1]);
  }
  return elementContainer[element];
}

console.log(fibonacci(5));


//Time Complexity = O(n) => Linear Time Complexity.