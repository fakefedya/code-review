/*
Пример: search=Вася&take=10
*/

const URL = 'https://youtube.com'

const queryString = (url, obj) => {
	const fullString =
		URL +
		'?' +
		Object.entries(obj)
			.map((el) => el.join('='))
			.join('&')
	return fullString
}

const object = { search: 'Вася', take: 10 }
const object1 = { task: 'Математика', value: 10, name: 'Коля' }

console.log(queryString(URL, object))
console.log(queryString(URL, object1))
