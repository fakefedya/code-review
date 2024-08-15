'use strict'

class Billing {
	#amount = 250

	calculateTotal() {
		return this.#amount
	}
}

class FixBilling extends Billing {
	calculateTotal() {
		return super.calculateTotal()
	}
}

class HourBilling extends Billing {
	constructor(hours) {
		super()
		this.hours = hours
	}

	calculateTotal() {
		return super.calculateTotal() * this.hours
	}
}

class ItemBilling extends Billing {
	constructor(items) {
		super()
		this.items = items
	}

	calculateTotal() {
		return super.calculateTotal() * this.items.length
	}
}

console.log(new FixBilling().calculateTotal())
console.log(new HourBilling(10).calculateTotal())
console.log(new ItemBilling([2, 3, 7, 'asd', '444']).calculateTotal())
