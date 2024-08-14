'use strict'

class Character {
	constructor(race, name, language) {
		this.race = race
		this.name = name
		this.language = language
	}

	talk() {
		console.log(`Мое имя: ${this.name}, я говорю на языке: ${this.language}`)
		return this
	}
}

class Orc extends Character {
	constructor(race, name, language, weapon) {
		super(race, name, language)
		this.weapon = weapon
	}

	hit() {
		console.log(
			`${this.name} взял в руки легендарный ${this.weapon} и нанес сокрушающий удар!`
		)
		return this
	}

	talk() {
		console.log(
			`Вообще-то я ${this.race}, и я привык полагаться на свою силу, думать у меня времени нет, пусть этим занимаются старейшены. Все, что мне надо - ${this.weapon} и хорошая драка!`
		)
		return this
	}
}

class Elf extends Character {
	constructor(race, name, language, spell) {
		super(race, name, language)
		this.spell = spell
	}

	castSpell() {
		console.log(
			`${this.race} ${this.name} использует заклинание ${this.spell}!`
		)
		return this
	}

	talk() {
		console.log(
			`Мое имя ${this.name}, и я живу для того чтобы мстить. Сперва Альянс подвёл мой народ, потом Иллидари. Неважно, я всё равно живу для того чтобы мстить. Меня не тяготят испытания, я наслаждаюсь ими.`
		)
		return this
	}
}

const orc = new Orc('Орк', 'Гаррош Адский Крик', 'Орочий', 'Кровавый вой')
orc.hit().talk()

const elf = new Elf('Эльф', 'Кель`тас', 'Си́ндарин', 'Чародейское разрушение')
elf.castSpell().talk()
