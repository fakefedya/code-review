const arr = [
	'10-02-2022',
	'40-02-2022',
	'12-13-2022',
	'12/13/2025',
	'тест',
	'те-те-тест',
	'тестдвтест',
	'11/12/2023',
	'00/13/2022',
	'11/14/2022',
	'41/12/2023',
]
const validDateCheck = (arr) => {
	const validDateArr = []
	for (let arrElement of arr) {
		switch (true) {
			case arrElement.length === 10 && arrElement.indexOf('-') > -1:
				const [dayRu, monthRu] = arrElement.split('-')
				dayRu > 0 && dayRu <= 31 && monthRu > 0 && monthRu <= 12
					? validDateArr.push(arrElement)
					: false
				break
			case arrElement.length === 10 && arrElement.indexOf('/') > -1:
				const tmpEl = [
					arrElement.split('/')[1],
					arrElement.split('/')[0],
					arrElement.split('/')[2],
				]
				arrElement.concat(tmpEl)
				const [monthUs, dayUs] = arrElement.split('/')
				dayUs > 0 && dayUs <= 31 && monthUs > 0 && monthUs <= 12
					? validDateArr.push(arrElement.replace(/[ / ]/g, '-'))
					: false
				break
			default:
		}
	}
	return validDateArr
}
console.log(validDateCheck(arr))
