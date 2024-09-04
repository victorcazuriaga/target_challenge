// IsFibonacci verify if a number is part of the Fibonacci sequence
// the function receives a number and two optional parameters, a and b, which are the first two numbers of the sequence

const isFibonacci = (n, a = 0, b = 1) => {
    if(n === a || n === b) {
        return `O número ${n} pertence à sequência de Fibonacci`;
      } else if (b > n) {
        return `O número ${n} não pertence à sequência de Fibonacci`;
      } else {
        return isFibonacci(n, b, a + b); // recursively calls itself with the next two numbers of the sequence
      }
    };
    

module.exports = {isFibonacci};