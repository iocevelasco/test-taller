coins = [1, 5, 1, 1, 1, 10, 15, 20, 100]

function noChange(coins) {
 coins.sort((a, b) => a - b)
 let currentMinNum = 0

 for (const coin of coins) {
  if (coin > currentMinNum + 1) {
   return currentMinNum + 1
  }

  currentMinNum += coin
 }

 return currentMinNum + 1
}

const array = [-10, -5, 0, 5, 10]

function multiplyValues(values) {
 const mappedValues = values.map(value => {
  return value * value
 })

 return mappedValues.sort((a, b) => a - b)
}

console.log(multiplyValues(array))