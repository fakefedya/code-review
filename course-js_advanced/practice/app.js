'use strict'

/*
	Написать функцию, которая принимает min и max
	и возвращает случайно целое число между ними, включая их
*/

function random(min, max) {
	const res = Math.floor(Math.random() * (max - min + 1) + min)
	return res
}

console.log(random(1, 10))
