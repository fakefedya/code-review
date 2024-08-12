'use strict'

/*
  Принцип Инверсии Зависимостей утверждает, что высокоуровневые модули не должны зависеть от низкоуровневых модулей, а оба типа модулей должны зависеть от абстракций. Это значит, что зависимости в нашем коде должны основываться на абстракциях, а не на конкретных реализациях.
 */

class DB {
	save(items) {
		// Save
		console.log(`Saved: ${items}`)
	}
}

class MongoDB extends DB {
	// ...
	save(items) {
		// Save
		console.log(`Saved to Mongo: ${items}`)
	}
}

class ToDoList {
	items = [1, 2, 3]
	db
	constructor(db) {
		this.db = db
	}

	saveToDb() {
		this.db.save(this.items)
	}
}

const list1 = new ToDoList(new DB())
list1.saveToDb()

const list2 = new ToDoList(new MongoDB())
list2.saveToDb()
