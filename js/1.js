// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// not a very elegant solution... but must be the fastest.
function getSumOfDivisors(number, first, second) {
  var timesFirst = Math.floor((number - 1) / first)
  var timesSecond = Math.floor((number - 1) / second)
  var timesFirstAndSecond = Math.floor((number - 1) / (first * second))

  return (first * timesFirst * (timesFirst + 1) / 2) + (second * timesSecond * (timesSecond + 1) / 2) - (first * second * timesFirstAndSecond * (timesFirstAndSecond + 1) / 2)
}

// get the answer
console.log(getSumOfDivisors(1000, 5, 3))
