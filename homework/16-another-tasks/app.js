/*
Расширение задачи
Ввод нового типа задачи с дополнительным свойством Description.
Цель: расширить функциональность без изменения исходных методов.
*/

'use strict'

const newTask = {
	tasks: [],
}

const ToDoList = {
	tasks: [],
	addTask(object) {
		if (!object) {
			return this
		}
		this.tasks.at(-1)?.id === undefined
			? (object.id = 1)
			: (object.id = this.tasks.at(-1)?.id + 1)
		this.tasks = [...this.tasks, object]
		return this
	},
	removeTask(id) {
		this.tasks = this.tasks.filter((task) => task.id !== id)
		return this
	},
	updateTask(id, object) {
		const taskForUpdate = this.tasks.find(({ id: taskId }) => taskId === id)
		if (!taskForUpdate) {
			return this
		}
		Object.assign(taskForUpdate, object)
		return this
	},
	sortTask(sortedBy, method = false) {
		const ALLOW_SORT_PARAMS = ['id', 'priority']
		if (!ALLOW_SORT_PARAMS.includes(sortedBy) || !sortedBy) {
			sortedBy = 'id'
		}
		this.tasks.sort(({ [sortedBy]: a }, { [sortedBy]: b }) =>
			method ? b - a : a - b
		)
		return this
	},
}

const newAddTask = ToDoList.addTask.bind(newTask)
const newRemoveTask = ToDoList.removeTask.bind(newTask)
const newUpdateTask = ToDoList.updateTask.bind(newTask)
const newSortTask = ToDoList.sortTask.bind(newTask)

const taskObject1 = {
	title: 'Данные номер 1',
	description: 'Описание 1',
	priority: 11,
}
const taskObject2 = {
	title: 'Данные номер 2',
	description: 'Описание 2',
	priority: 3,
}
const taskObject3 = {
	title: 'Данные номер 3',
	description: 'Описание 3',
	priority: 2,
}
const taskObject4 = {
	title: 'Данные номер 4',
	description: 'Описание 4',
	priority: 10,
}

newAddTask(taskObject1)
newAddTask(taskObject2)
newAddTask(taskObject3)
newAddTask(taskObject4)
console.log(newTask.tasks)
newRemoveTask(2)
console.log(newTask.tasks)
newUpdateTask(3, { taskObject1 })
newSortTask('priority')
console.log(newTask.tasks)
