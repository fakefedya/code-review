/*
Пример: search=Вася&take=10
*/

const URL = 'https://youtube.com'

const queryString = (url, obj) => {
	return (
		URL +
		'?' +
		Object.entries(obj)
			.map((el) => el.join('='))
			.join('&')
	)
}

const object = { search: 'Вася', take: 10 }
const object1 = { task: 'Математика', value: 10, name: 'Коля' }

console.log(queryString(URL, object))
console.log(queryString(URL, object1))
