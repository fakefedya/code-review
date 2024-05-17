// const prices = [
// 	[100, 200],
// 	[120, 100],
// 	[200, 350],
// ]
// console.log(prices.flat())
// console.log(prices)
// const positivePrices = prices
// 	.filter((pricesElement) => {
// 		return pricesElement[0] < pricesElement[1]
// 	})
// 	.map((positivePricesDiff) => {
// 		return positivePricesDiff[1] - positivePricesDiff[0]
// 	})
// console.log(positivePrices)

// const arr = [1, 4, 4, 10]

// const avg = arr.reduce((acc, arrElement, i) => {
// 	if (i !== arr.length - 1) {
// 		return (acc += arrElement)
// 	} else {
// 		return (acc += arrElement) / arr.length
// 	}
// }, 0)
// console.log(avg)

// const arr = [2, 4, 4, 10, 20]

// const findElement = (arr, element) => {
// 	const res = arr.find((el) => el === element)
// 	return res === undefined ? false : true
// }
// console.log(findElement(arr, 2))

// const some = (arr, element) => (arr.find((el) => el === element) ? true : false)

// console.log(some(arr, 4))
