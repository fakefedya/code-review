class User {
	constructor(name: string) {
		this.name = name
	}
	name: string
}

const user = new User('Вася')
console.log(user)
user.name = 'Петя'
console.log(user)

class Admin {
	role: number
}

const admin = new Admin()
console.log((admin.role = 1))
