//Checking a Number is Prime or Not....

function isPrime(number) {
  for (let i = 2; i < Math.sqrt(number); i++) {
    console.log("running");
    if (number % i == 0) {
      console.log("false");
    }
  }
  return true;
}

console.log(isPrime(27277));
