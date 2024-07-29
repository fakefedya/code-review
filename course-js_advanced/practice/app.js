'use strict'

const User = function (email, password) {
	this.email = email
	this.password = password
}

const user1 = new User('a@a.ru', 123)

console.log(user1)
console.log(user1 instanceof User)
