'use strict'

/*
	Цель Лекции: Объяснить важность разделения интерфейса и как это помогает избежать ненужной зависимости классов от интерфейсов, содержащих методы, которые им не требуются.
 */

class Weapon {
	cost

	dealDamage() {}
}

class Rifle extends Weapon {
	shoot() {
		// Огонь
		this.dealDamage()
	}
}

class Sword extends Weapon {
	strike() {
		// Удар
		this.dealDamage()
	}
}
