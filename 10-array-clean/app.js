/**
 Напишите функцию, которая принимает:
-Массив чисел
-Функцию удаления элементов
И возвращает отфильтрованный массив. При этом функция удаления элементов принимает число и возвращает true, если его надо удалить и false, если надо оставить
 */

const arr = [3, 6, 9, 2, 7, 9, 5]
const arr2 = [1, 3, 7, 8]

const removeElOfArr = (num) => {
	return num
}

const filterArr = (arr, fn) => {
	const filteredArr = []
	const num = 4
	for (const el of arr) {
		el < fn(num) ? filteredArr.push(el) : false
	}
	return filteredArr
}

console.log(filterArr(arr, removeElOfArr))
console.log(filterArr(arr2, removeElOfArr))
