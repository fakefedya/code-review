let a: number = 5
let b: string = a.toString()
let e: string = new String(a).valueOf()
let f: string = new String(a).valueOf()

let c = 'asd'
let d: number = parseInt(c)

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

const admin: Admin = {
	...user,
	role: 1,
}

function userToAdmin(user: User): Admin {
	return {
		name: user.name,
		role: 1,
	}
}

console.log(userToAdmin(user))
