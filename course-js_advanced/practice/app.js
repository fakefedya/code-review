'use strict'

const weatherMap = new Map([
	['London', 10],
	['Moscow', 7],
	['Paris', 14],
])

for (const [key, value] of weatherMap) {
	console.log(key)
	console.log(value)
}

/* 3.7 Практика */

console.log([...weatherMap])
console.log(...weatherMap.keys())
console.log(...weatherMap.values())

let newWeatherMap = new Map([
	['London', 10],
	['Moscow', 7],
	['Paris', 14],
])

newWeatherMap = new Map([...newWeatherMap].map((el) => el.reverse()))
console.log(newWeatherMap)
