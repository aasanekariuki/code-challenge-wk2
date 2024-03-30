// implementing the function isPrime
function isPrime(number) {
    for(let i = 2; i < number; i++) {
      if(number % i === 0) {
        return false;
      }
    }
    return number !== 1;
  }
  
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let primes = array.filter(isPrime);
  
  console.log("array: " + array);
  console.log("primes: " + primes);