'use strict'

class Car {
	#vin = 6
	speed

	constructor() {}

	#changeVin() {
		console.log('Changed!')
	}

	test() {
		this.#changeVin()
	}
}

const car = new Car()
car.speed
