'use strict'

/*
	- Сделать класс врага с здоровьем и методом получения урона
	- Сделать класс меча, который имеет силу и метод нанесения урона
	- Сделать класс орка, который в 50% не получает урон
*/

class Enemy {
	health

	constructor(health) {
		this.health = health
	}

	receiveDamage(numberOfDamage) {
		if (this.health - numberOfDamage < 0) {
			this.health = 0
			console.log(this.health)
			return this.health
		}
		this.health = this.health - numberOfDamage
		console.log(this.health)
		return this.health
	}
}

class Sword {
	#damage

	constructor(damage) {
		this.#damage = damage
	}

	strike(enemy) {
		enemy.receiveDamage(this.#damage)
	}
}

class Orc extends Enemy {
	constructor(health) {
		super(health)
	}

	receiveDamage(numberOfDamage) {
		if (Math.random() > 0.5) {
			if (this.health - numberOfDamage < 0) {
				this.health = 0
				console.log(this.health)
				return this.health
			}
			this.health = this.health - numberOfDamage
			console.log(this.health)
			return this.health
		}
		console.log('Не повезло.. Промах.')
	}
}

const enemy = new Orc(10)
const sword = new Sword(3)

sword.strike(enemy)
sword.strike(enemy)
sword.strike(enemy)
sword.strike(enemy)
sword.strike(enemy)
