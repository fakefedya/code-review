interface IUser {
	name: string
	age: number
}

function getValue<T, K extends keyof T>(obj: T, key: K) {
	console.log(obj[key])
	return obj[key]
}

const user: IUser = {
	name: 'Вася',
	age: 28,
}

const userName = getValue(user, 'name')
