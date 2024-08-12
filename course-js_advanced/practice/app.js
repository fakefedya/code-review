'use strict'

/*
	Основная Идея: Принцип Барбары Лисков (LSP - Liskov Substitution Principle) указывает на то, что объекты класса-потомка должны быть способны заменять объекты базового класса без нарушения работоспособности программы.
*/

class User {
	#role = 'user'
	getRole() {
		return this.#role
	}
}

class Admin extends User {
	#role = ['user', 'admin']

	getRole() {
		return this.#role.join(', ')
	}
}

function logRole(user) {
	console.log('Role: ' + user.getRole().toUpperCase())
}

logRole(new User())
logRole(new Admin())
