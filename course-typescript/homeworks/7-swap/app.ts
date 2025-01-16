const obj: Record<string, number> = {
	A: 1,
	B: 2,
}

function swapKeysAndValues(
	object: Record<string, number>
): Record<number, string> {
	const swappedObj: Record<number, string> = {}
	for (const key in object) {
		swappedObj[object[key]] = key
	}
	console.log(swappedObj)
	return swappedObj
}

const swappedRes = swapKeysAndValues(obj)

// Трай через функцию

function createStartingObj(
	firstVal: number = 2,
	secondVal: number = 3
): Record<string, number> {
	return { A: firstVal, B: secondVal }
}

function swapKeysAndValuesExtra(): Record<number, string> {
	const objExtra = createStartingObj()
	const swappedObj: Record<number, string> = {}
	for (const key in objExtra) {
		swappedObj[objExtra[key]] = key
	}
	console.log(swappedObj)
	return swappedObj
}

const swappedResExtra = swapKeysAndValuesExtra()
