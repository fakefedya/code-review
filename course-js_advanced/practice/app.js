'use strict'

/*
Таймер пиццы Сделать таймер пиццы (функция, принимающая время), который будет выводить в консоль секунды, оставшиеся до готовности пиццы и сообщение по готовности. 00:04 00:03 00:02 00:01 00:00 🍕!!!
*/

const readyTimer = '00:05'

function pizzaTimer(stringWithTime) {
	const end = new Date().getTime() + stringWithTime
	const interval = setInterval(() => {
		console.log(
			new Intl.DateTimeFormat('ru-RU', {
				minute: 'numeric',
				second: 'numeric',
			}).format(end + 100 - new Date())
		)
	}, 1000)
	setTimeout(() => {
		clearInterval(interval)
		console.log(`🍕!!!`)
	}, stringWithTime)
}

pizzaTimer(5000)
