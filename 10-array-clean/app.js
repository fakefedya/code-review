/**
 Напишите функцию, которая принимает:
-Массив чисел
-Функцию удаления элементов
И возвращает отфильтрованный массив. При этом функция удаления элементов принимает число и возвращает true, если его надо удалить и false, если надо оставить
 */

const arr = [3, 6, 9, 2, 7, 9, 5]
const arr2 = [1, 3, 7, 8]
// const removeArrElements = (arr, test) => {
// 	const filteredArr = []
// 	for (let element of arr) {
// 		if (element < test) {
// 			filteredArr.push(element)
// 		}
// 	}
// 	return filteredArr
// }

// const modifyArr = (arr, test, fn) => {
// 	return fn(arr, test)
// }

// console.log(modifyArr(arr, 5, removeArrElements))
// console.log(modifyArr(arr2, 9, removeArrElements))

const removeArrElements = (arr) => {
	return function (test) {
		const filteredArr = []
		for (let element of arr) {
			if (element < test) {
				filteredArr.push(element)
			}
		}
		return filteredArr
	}
}

const modifyArr = removeArrElements(arr)
const modifyArr2 = removeArrElements(arr2)
console.log(modifyArr(6))
console.log(modifyArr2(6))

// Не совсем понял условия упражнения. Мне нужно сделать возврат функции или callback?
