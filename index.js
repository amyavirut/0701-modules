const items = require('./data')
const calc = require('./calc')

console.log(calc.add(items.map(i => i.price)))
console.log(calc.subtract(items.map(i => i.price)))

