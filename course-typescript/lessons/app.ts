interface User {
	name: string
	email: string
	login: string
}

const user: User = {
	name: 'Вася',
	email: 'vasya@vas.tu',
	login: 'Вася',
}

interface Admin {
	name: string
	role: number
}

function logId(id: string | number) {
	if (isString(id)) {
		console.log(id)
	} else console.log(id)
}

// Type Guard
function isString(x: string | number): x is string {
	return typeof x === 'string'
}

// Проверка Type Guard
function isAdmin(user: User | Admin): user is Admin {
	return 'role' in user
}

// Альтернативная проверка Type Guard
function isAdminAlt(user: User | Admin): user is Admin {
	return (user as Admin).role !== undefined
}

function setRole(user: User | Admin) {
	if (isAdmin(user)) {
		user.role = 0
	} else {
		throw new Error('Пользователь не админ')
	}
}
