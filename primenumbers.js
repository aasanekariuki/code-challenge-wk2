// Function to check if a number is prime
function isPrime(number) {
    for(let i = 2; i < number; i++) {
      if(number % i === 0) {
        return false;
      }
    }
    return number !== 1;
  }
  // Filter the array to get only prime numbers using isPrime function
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let primes = array.filter(isPrime);
  // Output the original array and the prime numbers
  console.log("array: " + array);
  console.log("primes: " + primes);