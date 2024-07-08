'use strict'

const obj = [
	{ id: 1, name: 'Вася' },
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 2, name: 'Степа' },
]

const cleanCollection = new Set(
	obj.map((el) => obj.find((value) => value.id === el.id))
)

console.log(cleanCollection)
