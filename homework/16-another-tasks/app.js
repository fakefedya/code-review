/*
Расширение задачи
Ввод нового типа задачи с дополнительным свойством Description.
Цель: расширить функциональность без изменения исходных методов.
*/

'use strict'

// const newTask = {
// 	tasks: [
// 		{
// 			id: 1,
// 			name: 'Тест',
// 			description: 'Описание',
// 			order: 0,
// 		},
// 	],
// }

function editTasks() {
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
		getTask(id) {
			return this.tasks.find(({ id: taskId }) => taskId === id)
		},
		removeTask(id) {
			this.tasks = this.tasks.filter((task) => task.id !== id)
			return this
		},
		updateTask(id, object) {
			const taskForUpdate = this.getTask(id)
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
	return function () {
		return ToDoList
	}
}

const newTask = editTasks()
const newTask1 = editTasks()

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

newTask().addTask(taskObject1)
newTask().addTask(taskObject2)
newTask().addTask(taskObject3)
newTask().updateTask(2, {
	title: 'Данные номер 2 (обновлено)',
	description: 'Описание 2 (обновлено)',
	priority: 12,
})
newTask().sortTask('priority')
newTask().removeTask(3)
console.log(newTask().tasks)

newTask1().addTask(taskObject3)
newTask1().addTask(taskObject1)
console.log(newTask1().tasks)
