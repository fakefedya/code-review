/*
Пример: search=Вася&take=10
*/

const urlYT = 'https://youtube.com'
const urlTTV = 'https://twitch.tv'

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

console.log(queryString(urlYT, object))
console.log(queryString(urlTTV, object1))
