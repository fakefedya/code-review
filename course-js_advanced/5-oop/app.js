'use strict'

/*
  Создать Базовый Класс Персонаж с свойствами:
  - Раса
  - Имя
  - Язык 
  И методом:
  - говорить (выводит язык и имя персонажа в консоль)

  Создать класс Орк, доп. свойство:
  - Оружие (weapon)
  Методы:
  - Удар

    Создать класс Эльф, доп. свойство:
  - Оружие (weapon)
  Методы:
  - Выбрать тип заклинания
  - Применить заклинание
*/

const Character = function (race, name, language) {
	this.race = race
	this.name = name
	this.lang = language
}

Character.prototype.speak = function () {
	console.log(`Мое имя: ${this.name}, я говорю на языке: ${this.language}`)
}

const orc = new Character('Орк', 'Гаррош Адский Крик', 'Орочий')
orc.weapon = 'Кровавый вой'
orc.__proto__.hit = function () {
	console.log(`${this.name} взял в руки ${this.weapon} и нанес удар!`)
}

const elf = new Character('Эльф', 'Кельтас Солнечный Скиталец', 'Эльфийский')
elf.__proto__.spellType = function () {
	console.log(`${this.name} выбрал тип заклинания.`)
}
elf.__proto__.cast = function () {
	console.log(`${this.name} применил заклинание.`)
}

orc.hit()
elf.spellType()
elf.cast()
