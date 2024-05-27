const arr = [
	'10-02-2022',
	'40-02-2022',
	'12-13-2022',
	'31-02-2022',
	'12/13/2025',
	'тест',
	'те-те-тест',
	'тестдвтест',
	'11/12/2023',
	'00/13/2022',
	'11/14/2022',
	'41/12/2023',
	'1s2-3-203q',
]

const getDates = (arr) => {
	if (arr.length !== 0) {
		return arr
	}
	console.log('Исходный массив пустой!')
	return
}

const datesToOneFormat = (fn) => {
	const formatedArr = []
	for (let element of fn) {
		switch (true) {
			case element.indexOf('-') !== -1:
				formatedArr.push(element)
				break
			case element.indexOf('/') !== -1:
				const [month, day, year] = element.split('/')
				element = [day, month, year]
				element = element.join('-')
				formatedArr.push(element)
				break
			default:
		}
	}
	console.log('Преобразуем даты в один формат:', formatedArr)
	return formatedArr
}

const validateDates = (fn) => {
	const validatedArr = []
	for (const element of fn) {
		const [day, month, year] = element.split('-')
		switch (true) {
			case element.length === 10 &&
				isNaN(day) === false &&
				isNaN(month) === false &&
				isNaN(year) === false:
				switch (true) {
					case month === '02' && day > 0 && day <= 28 && year > 0:
						validatedArr.push(element)
						break
					case month > 0 &&
						month <= 12 &&
						month !== '02' &&
						day > 0 &&
						day <= 31 &&
						year > 0:
						validatedArr.push(element)
						break
					default:
				}
				break
			default:
		}
	}
	console.log('Валидируем даты (без учета високосного года):', validatedArr)
	return validatedArr
}

validateDates(datesToOneFormat(getDates(arr)))
