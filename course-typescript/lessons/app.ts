class Vehicle {
	make: string //Публичное свойство
	private damages: string[]
	private _model: string
	protected run: number
	#price: number // Лучше не использовать в TS

	set model(model: string) {
		this._model = model
	}

	get model() {
		return this._model
	}

	isPriceEqual(v: Vehicle) {
		return this.#price === v.#price
	}

	addDamage(damage: string) {
		this.damages.push(damage)
	}
}

class EuroTrack extends Vehicle {
	setRun(km: number) {
		this.run = km / 0.62
		// this.damage - error
	}
}

new Vehicle()
new EuroTrack()
