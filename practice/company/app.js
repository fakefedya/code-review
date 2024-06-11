/*
Получить имя:
- Компании
- СЕО
- Сотрудника
*/

'use strict'

const company = {
	name: 'ООО Агро',
	employees: [
		{
			name: 'Света',
			getName: function () {
				return `Имя сотрудника: "${this.name}"`
			},
		},
	],
	ceo: {
		name: 'Вася',
		getName: function () {
			return `Имя СЕО: "${this.name}"`
		},
	},
	getName: function () {
		return `Имя компании: "${this.name}"`
	},
}
console.log(company.getName())
console.log(company.ceo.getName())
console.log(company.employees.map((el) => el.getName()))

function a() {
	console.log(arguments[0])
}
a(1)
