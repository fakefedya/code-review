'use strict'

const Book = function (title, author) {
	this.title = title
	this.author = author
	this.isRead = false
}

Book.prototype.read = function () {
	this.isRead = true
}

class BookClass {
	isRead = false

	constructor(title, author) {
		this.title = title
		this.author = author
	}

	read() {
		this.isRead = true
	}
}

const lotr = new BookClass('lotr', 'Tolkien')
console.log(lotr)
console.log(lotr instanceof BookClass)
console.log(lotr.__proto__)
lotr.read()
console.log(lotr)
