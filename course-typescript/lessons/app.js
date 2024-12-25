'use strict'
const user = {
	name: 'Вася',
	email: 'vasya@vas.tu',
	login: 'Вася',
}
function logId(id) {
	if (isString(id)) {
		console.log(id)
	} else console.log(id)
}
// Type Guard
function isString(x) {
	return typeof x === 'string'
}
// Проверка Type Guard
function isAdmin(user) {
	return 'role' in user
}
// Альтернативная проверка Type Guard
function isAdminAlt(user) {
	return user.role !== undefined
}
function setRole(user) {
	if (isAdmin(user)) {
		user.role = 0
	} else {
		throw new Error('Пользователь не админ')
	}
}
