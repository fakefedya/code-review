const arr = [1, 40, -5, 10, 0]
const sort = (arr, sortType) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			switch (sortType) {
				case 'inc':
					if (arr[j] > arr[j + 1]) {
						;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
					}
					break
				case 'dec':
					if (arr[j] < arr[j + 1]) {
						;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
					}
					break
				default:
					return 'Введите корректный метод сортировки ("inc" / "dec")'
			}
		}
	}
	return arr
}
console.log(sort(arr, 'inc'))
console.log(sort(arr, 'dec'))
console.log(sort(arr, 'oops'))
