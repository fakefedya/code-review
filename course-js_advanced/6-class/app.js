'use strict'

class Car {
	#make
	#model
	#_run

	constructor(make, model, run) {
		this.#make = make
		this.#model = model
		this.#run = run
	}

	set #run(run) {
		this.#_run = run
	}

	get #run() {
		return this.#_run
	}

	checkRun(run) {
		if (!isNaN(run)) {
			return this.#run < run
		}
	}

	updateRun(newRun) {
		if (!this.checkRun(newRun)) {
			return false
		}
		this.#run = newRun
		return true
	}

	info() {
		return console.log(
			`Марка: ${this.#make}, Модель: ${this.#model}, Пробег: ${this.#run}км.`
		)
	}
}

const car = new Car('Mercedes', 'CLA', 1355)
car.info()
console.log(car.checkRun(123))
console.log(car.updateRun(2357))
car.info()

const car1 = new Car('BMW', 'X5', 120)
car1.info()
console.log(car1.checkRun(120))
console.log(car1.updateRun(1200))
car1.info()
