'use strict'

const weatherMap = new Map()

weatherMap.set('London', '10').set('Moscow', '7')

console.log(weatherMap.get('Moscow'))
console.log(weatherMap.has('Moscow'))

weatherMap.delete('London')
weatherMap.clear()

const arr = [1, 2, 3]

weatherMap
	.set(1, 5)
	.set(true, 'yes')
	.set(true, 'yes!')
	.set(false, 'no')
	.set(arr, 'array')
	.set({ a: 1 }, { b: 1 })

console.log(weatherMap)
console.log(weatherMap.size)

const newWeatherMap = new Map([
	['London', 10],
	['Moscow', 7],
])

const weatherObj = {
	london: 7,
	moscow: 5,
	paris: 14,
}

const newWeatherMap2 = new Map(Object.entries(weatherObj))

console.log(newWeatherMap)
console.log(newWeatherMap2)
