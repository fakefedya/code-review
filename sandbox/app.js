const macPrice = 2000
const isPossibleCredit = (age, hasWork) => {
	switch (true) {
		case Number(age) > 24 && hasWork:
			return 500
		case Number(age) > 24:
			return 100
		default:
			return 0
	}
}
const isPossibleBuy = (age, hasWork, money) => {
	switch (true) {
		case Number(money) >= 2000:
			console.log('Может купить')
			break
		case Number(money) < 2000:
			const creditMoney = isPossibleCredit(age, hasWork)
			console.log(
				creditMoney + money >= macPrice ? 'Может купить' : 'Не может купить'
			)
	}
}
isPossibleBuy(25, true, 1500)
