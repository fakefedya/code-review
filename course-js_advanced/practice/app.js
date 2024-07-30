'use strict'

const Book = function (title, author) {
	this.title = title
	this.author = author
}

Book.prototype.isRead = false

const lordOfTheRings = new Book('1', '1')

console.log(Book.prototype.__proto__)
