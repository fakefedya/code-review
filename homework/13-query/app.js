/*
Пример: search=Вася&take=10
*/

const sourceYT = 'https://youtube.com'
const sourceTTV = 'https://twitch.tv'

const queryString = (url, obj) => {
	return (
		url +
		'?' +
		Object.entries(obj)
			.map((el) => el.join('='))
			.join('&')
	)
}

const object = { search: 'Вася', take: 10 }
const object1 = { task: 'Математика', value: 10, name: 'Коля' }

console.log(queryString(sourceYT, object))
console.log(queryString(sourceTTV, object1))
