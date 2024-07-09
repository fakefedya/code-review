'use strict'

console.log(10 === 10.0)
console.log(0.1 + 0.2 === 0.3)
console.log(0.1 + 0.2)
console.log(+'20')
console.log(Number('10')) // конвертация всегда в десятиричную систему
console.log(Number.parseInt('10', 2)) // 1 0 в бинарной системе
console.log(Number.parseInt('11 sec', 10))

console.log(Number.parseFloat(11.5, 10))
console.log(Number.parseFloat('11.5 sec', 10))
console.log(Number.parseFloat('sec 11.5', 10))

console.log(Number.isNaN(Number('123sda')))
console.log(10 / 0)
console.log(Number.isFinite(10 / 0))

console.log(Number.isInteger(10))
console.log(Number.isInteger(10.1))

console.log('/////////////////')

console.log(Math.sqrt(36))
console.log(Math.max(1, -2, 10, 0, 19))
console.log(Math.max(1, -2, '10', true, 19))
console.log(Math.max(1, -2, '10', true, '19sd'))
console.log(Math.min(1, -2, 10, 0, 19))

const arr = [1, -2, 10, 0, 19]
console.log(Math.max(...arr))

console.log(Math.random())

console.log('/////////////////')

console.log(Math.round(1.4))
console.log(Math.round(1.6))
console.log(Math.round(1.499))

console.log(Math.ceil(1.1))
console.log(Math.ceil(1))
console.log(Math.ceil(0.1))

console.log(Math.floor(2.9))
console.log(Math.floor(0.1))

console.log(Math.trunc(1.5))
console.log(Math.trunc(1.3))
console.log(Math.trunc(1.666887))

console.log(Number((1.499999).toFixed(1)))
