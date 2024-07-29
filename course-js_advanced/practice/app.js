'use strict'

/*
	Реализовать на функциях и прототипах корзину товаров с методами:
	- Добавить товар
	- Увеличить число товаров
	- Уменьшить число товаров (удалить, если их 0)
*/

const product = {
	id: 1,
	name: 'Bread',
	count: 1,
}

const Cart = function () {
	console.log(this)
	this.products = []
}

Cart.prototype.addProduct = function (id) {
	if (this.products.find((product) => product.id) === id.id) {
		return
	}
	this.products.push(product)
}

Cart.prototype.increaseAmount = function (id) {
	this.products = this.products.map((product) => {
		if (product.id === id) {
			product.count++
			return product
		}
		return product
	})
}

Cart.prototype.decreaseAmount = function (id) {
	this.products = this.products
		.map((product) => {
			if (product.id === id) {
				product.count--
				return product
			}
			return product
		})
		.filter((product) => product.count > 0)
}

const cart = new Cart()

cart.addProduct(product)
console.log(cart)
cart.increaseAmount(1)
console.log(cart)
cart.decreaseAmount(1)
console.log(cart)
cart.decreaseAmount(1)
console.log(cart)
