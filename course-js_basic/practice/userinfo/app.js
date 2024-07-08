/*
Сделать функцию пользователя которая берет за основу userInfo и за счет замыкания создает новый объект, с которым можно работать как

user1().increase(100)
*/

'use strict'

const userInfo = {
	balance: 0,
	operations: 0,
	increase(sum) {
		this.balance += sum
		this.operations++
	},
}

const userObj = { ...userInfo }
function user() {
	return function () {
		return userObj
	}
}
const user1 = user()
const user2 = user()
user1().increase(100)
user1().increase(100)
user1().increase(-50)
user1().increase(350)
user2().increase(350)
console.log(user1())
console.log(user2())
