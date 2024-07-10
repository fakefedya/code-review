'use strict'

const now = new Date()
console.log(now)

console.log(new Date('02-01-2022'))
console.log(new Date('02/01/2022'))

console.log(new Date(2024, 10, 20)) // 10 - ноябрь, потому что в ЖС с 0
console.log(new Date(2024, 12, 51 + 10))
console.log(new Date(2024, 12, 51, 10, 5, 10))
console.log(new Date(1 * 24 * 60 * 60 * 1000))
console.log(Date.now())
console.log(new Date(Date.now()))

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getTime())

console.log(new Date(now.setFullYear(2030)))
