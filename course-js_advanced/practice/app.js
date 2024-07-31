'use strict'

const task = {
	title: 'Task1',
	dueTo: new Date('2023/01/01'),

	get isOverDue() {
		return this.dueTo < new Date()
	},

	set isOverDue(isOver) {
		if (!isOver) {
			this.dueTo = new Date()
		}
	},
}

console.log(task.isOverDue)
task.isOverDue = false
console.log(task)

class Task {
	constructor(title, dueDate) {
		this.title = title
		this.dueDate = dueDate
	}

	get isOverdue() {
		return this.dueDate < new Date()
	}

	set dueDate(date) {
		if (date < new Date()) {
			return
		}
		this._dueDate = date
	}
}

const newTask = new Task('Task2', new Date())
console.log(newTask.isOverdue)
console.log(newTask)
