'use strict'

class User {
	#login
	#cryptoPassword

	constructor(login, password) {
		this.#login = login
		this.#password = password
	}

	set #password(password) {
		this.#cryptoPassword = password.split('').reverse().join('')
	}

	get #password() {
		return this.#cryptoPassword.split('').reverse().join('')
	}

	get login() {
		return this.#login
	}

	checkPassword(pass) {
		return this.#password === pass
	}

	changePassword(oldPass, newPass) {
		if (!this.checkPassword(oldPass)) {
			return false
		}
		this.#password = newPass
		return true
	}
}

const user = new User('a@a.ru', '1234')
console.log(user)
console.log(user.login)
console.log(user.checkPassword('1234'))
console.log(user.changePassword('11234', '5678'))
console.log(user.changePassword('1234', '5678'))
console.log(user)
