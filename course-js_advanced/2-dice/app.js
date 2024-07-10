/*
Задача:
Реализовать функцию имитации броска игрального многогранника, тип многогранника:
d4, d6, d8, d10, d12, d16, d20
Вернуть: случайное целое число в интервале с включенными границами
*/

/*
Идея: принимать наименование многогранника и разбивать его имя на 'd' и число + сравнивать его имя с массивом наименований многогранников, чтобы проверять корректность введенного наименования, после чего смотреть его самую высокую по значению грань (max) и минимальную грань = 1 (всегда) (min), после:
	const res = Math.floor(Math.random() * (max - min + 1) + min)
	return res
*/

function dice(typeOfDice) {
	const MIN_DICE_VAL = 1

	diceTypeArr = [
		{ diceName: 'd4' },
		{ diceName: 'd6' },
		{ diceName: 'd8' },
		{ diceName: 'd10' },
		{ diceName: 'd12' },
		{ diceName: 'd16' },
		{ diceName: 'd20' },
	]

	const selectedTypeOfDice = diceTypeArr.find((d) => d.diceName === typeOfDice)
	if (!selectedTypeOfDice) {
		console.log(`Введен некорректный тип многогранника: "${typeOfDice}"`)
		return
	}
	const maxDiceVal = selectedTypeOfDice.diceName.split('d').pop()
	const res = Math.floor(
		Math.random() * (maxDiceVal - MIN_DICE_VAL + 1) + MIN_DICE_VAL
	)
	return res
}

console.log(dice('d4'))
console.log(dice('d6'))
console.log(dice('d20'))
