/*
	Написать универсальную обобщенную функцию toString, которая будет принимать разные типы данных и переводить их в строковое представление.
*/

function toString<T>(data: T): string | undefined {
	if (Array.isArray(data)) {
		return data.toString()
	}
	switch (typeof data) {
		case 'string':
			return data
		case 'number':
		case 'symbol':
		case 'bigint':
		case 'boolean':
		case 'function':
			return data.toString()
		case 'object':
			return JSON.stringify(data)
		default:
			return undefined
	}
}

console.log(toString(3))
console.log(toString(true))
console.log(toString(['test', 'test1']))
console.log(toString({ name: 'Федя' }))
