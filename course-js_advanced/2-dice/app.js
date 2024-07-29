/*
Задача:
Реализовать функцию имитации броска игрального многогранника, тип многогранника:
d4, d6, d8, d10, d12, d16, d20
Вернуть: случайное целое число в интервале с включенными границами
*/

function dice(typeOfDice) {
	const MIN_DICE_VAL = 1
	const allowedTypesOfDice = {
		d4: '4',
		d6: '6',
		d8: '8',
		d10: '10',
		d12: '12',
		d16: '16',
		d20: '20',
	}
	if (!allowedTypesOfDice[typeOfDice]) {
		return `Введен некорректный тип многогранника: "${typeOfDice}"`
	}
	return Math.floor(
		Math.random() *
			(Number(allowedTypesOfDice[typeOfDice]) - MIN_DICE_VAL + 1) +
			MIN_DICE_VAL
	)
}

console.log(dice('d4'))
console.log(dice('d6'))
console.log(dice('d20'))
console.log(dice('d2'))
console.log(dice('d10'))
