/*
Задача:
Реализовать функцию имитации броска игрального многогранника, тип многогранника:
d4, d6, d8, d10, d12, d16, d20
Вернуть: случайное целое число в интервале с включенными границами
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
		return `Введен некорректный тип многогранника: "${typeOfDice}"`
	}
	const maxDiceVal = selectedTypeOfDice.diceName.split('d').pop()
	return Math.floor(
		Math.random() * (maxDiceVal - MIN_DICE_VAL + 1) + MIN_DICE_VAL
	)
}

console.log(dice('d4'))
console.log(dice('d6'))
console.log(dice('d20'))
console.log(dice('d2'))
console.log(dice('d10'))
