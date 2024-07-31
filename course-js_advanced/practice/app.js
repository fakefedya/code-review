'use strict'

const User = {
	init(email, password) {
		this.email = email
		this.password = password
	},
	log() {
		console.log('Log')
	},
}

const user = Object.create(User)
console.log(user.__proto__ == User)
user.log()
// user.email = 'a@a.ru'
// user.password = '123'
user.init('a@a.ru', '123')
console.log(user)

const admin = Object.create(user)
console.log(admin)
