'use strict'

/*
Добавление задачи:
  Принимает параметры: title и priority.
  Генерирует id (можно использовать инкремент последнего id).
  Добавляет новую задачу в массив.
Удаление задачи по id:
  Принимает идентификатор задачи.
  Удаляет задачу с указанным id из массива.
Обновление задачи:
  Принимает id задачи и параметры для обновления (например, новый title, новый приоритет).
  Обновляет информацию о задаче в массиве.
Сортировка задач:
  Можно сортировать по id или приоритету.
  Реализует порядок сортировки (от меньшего к большему и наоборот).
*/

const toDoList = {
	tasks: [
		{
			title: 'Помыть посуду',
			id: 1,
			priority: 7,
		},
		{
			title: 'Сходить в парк',
			id: 2,
			priority: 6,
		},
	],
	taskAdd: function (title, priority) {
		let taskId = this.tasks.at(-1)?.id
		this.tasks.push({ title, id: taskId, priority })
	},
	taskRemove: function (id) {
		const existedTaskId = this.tasks.find((g) => g.id === id)
		if (!existedTaskId) {
			console.log(`Задача с id=${id} отсутствует в списке задач`)
			return
		} else {
			this.tasks = this.tasks.filter((id) => existedTaskId !== id)
		}
	},
	taskUpdate: function (title, id, priority) {
		let existedTaskId = this.tasks.find((g) => g.id === id)
		if (!existedTaskId) {
			console.log(`Задача с id=${id} отсутствует в списке задач`)
			return
		} else {
			this.tasks = this.tasks.filter((id) => existedTaskId !== id)
			this.tasks.push({ title, id: existedTaskId.id, priority })
		}
	},
	taskSortByParameter: function (sortType, sortParameter) {
		if (sortParameter === 'id') {
			switch (sortType) {
				case 'toLow':
					return this.tasks.sort((a, b) => b.id - a.id)
				case 'toHigh':
					return this.tasks.sort((a, b) => a.id - b.id)
				default:
					return
			}
		} else if (sortParameter === 'priority') {
			switch (sortType) {
				case 'toLow':
					return this.tasks.sort((a, b) => b.priority - a.priority)
				case 'toHigh':
					return this.tasks.sort((a, b) => a.priority - b.priority)
				default:
					return
			}
		} else {
			return
		}
	},
}

// toDoList.taskAdd('Повторение материала по JS', 3)
// toDoList.taskAdd('Погулять с собакой', 5)
// toDoList.taskAdd('Запланировать поход к стоматологу', 6)
// toDoList.taskRemove(3)
// toDoList.taskRemove(5)
// toDoList.taskAdd('Организовать вечернюю прогулку', 2)
// toDoList.taskAdd('Перезвонить по номеру ____', 2)
// toDoList.taskUpdate('Погулять с кошкой', 4, 4)
// toDoList.taskSortByParameter('toLow', 'priority')
// console.log(toDoList.tasks)

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

const taskObject1 = { title: 'Данные номер 1', priority: 5 }
const taskObject2 = { title: 'Данные номер 2', priority: 1 }
const taskObject3 = { title: 'Данные номер 3', priority: 7 }
const taskObject4 = { title: 'Данные номер 4', priority: 6 }
const taskObject5 = { title: 'Данные номер 5', priority: 11 }

ToDoList.addTask(taskObject3)
ToDoList.addTask(taskObject1)
ToDoList.addTask(taskObject2)
ToDoList.addTask(taskObject4)
ToDoList.addTask(taskObject5)
ToDoList.updateTask(2, { title: 'Данные номер 2 (обновлено)', priority: 12 })
ToDoList.updateTask(4, { title: 'Данные номер 4 (обновлено)', priority: 1 })
ToDoList.sortTask('priority')
ToDoList.removeTask(1)
console.log(ToDoList.tasks)

;('use strict')

/*
Добавление задачи:
  Принимает параметры: title и priority.
  Генерирует id (можно использовать инкремент последнего id).
  Добавляет новую задачу в массив.
Удаление задачи по id:
  Принимает идентификатор задачи.
  Удаляет задачу с указанным id из массива.
Обновление задачи:
  Принимает id задачи и параметры для обновления (например, новый title, новый приоритет).
  Обновляет информацию о задаче в массиве.
Сортировка задач:
  Можно сортировать по id или приоритету.
  Реализует порядок сортировки (от меньшего к большему и наоборот).
*/

const toDoList = {
	tasks: [
		{
			title: 'Помыть посуду',
			id: 1,
			priority: 7,
		},
		{
			title: 'Сходить в парк',
			id: 2,
			priority: 6,
		},
	],
	taskAdd: function (title, priority) {
		let taskId = this.tasks.at(-1)?.id
		this.tasks.push({ title, id: taskId, priority })
	},
	taskRemove: function (id) {
		const existedTaskId = this.tasks.find((g) => g.id === id)
		if (!existedTaskId) {
			console.log(`Задача с id=${id} отсутствует в списке задач`)
			return
		} else {
			this.tasks = this.tasks.filter((id) => existedTaskId !== id)
		}
	},
	taskUpdate: function (title, id, priority) {
		let existedTaskId = this.tasks.find((g) => g.id === id)
		if (!existedTaskId) {
			console.log(`Задача с id=${id} отсутствует в списке задач`)
			return
		} else {
			this.tasks = this.tasks.filter((id) => existedTaskId !== id)
			this.tasks.push({ title, id: existedTaskId.id, priority })
		}
	},
	taskSortByParameter: function (sortType, sortParameter) {
		if (sortParameter === 'id') {
			switch (sortType) {
				case 'toLow':
					return this.tasks.sort((a, b) => b.id - a.id)
				case 'toHigh':
					return this.tasks.sort((a, b) => a.id - b.id)
				default:
					return
			}
		} else if (sortParameter === 'priority') {
			switch (sortType) {
				case 'toLow':
					return this.tasks.sort((a, b) => b.priority - a.priority)
				case 'toHigh':
					return this.tasks.sort((a, b) => a.priority - b.priority)
				default:
					return
			}
		} else {
			return
		}
	},
}

// toDoList.taskAdd('Повторение материала по JS', 3)
// toDoList.taskAdd('Погулять с собакой', 5)
// toDoList.taskAdd('Запланировать поход к стоматологу', 6)
// toDoList.taskRemove(3)
// toDoList.taskRemove(5)
// toDoList.taskAdd('Организовать вечернюю прогулку', 2)
// toDoList.taskAdd('Перезвонить по номеру ____', 2)
// toDoList.taskUpdate('Погулять с кошкой', 4, 4)
// toDoList.taskSortByParameter('toLow', 'priority')
// console.log(toDoList.tasks)

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

const taskObject1 = { title: 'Данные номер 1', priority: 5 }
const taskObject2 = { title: 'Данные номер 2', priority: 1 }
const taskObject3 = { title: 'Данные номер 3', priority: 7 }
const taskObject4 = { title: 'Данные номер 4', priority: 6 }
const taskObject5 = { title: 'Данные номер 5', priority: 11 }

ToDoList.addTask(taskObject3)
ToDoList.addTask(taskObject1)
ToDoList.addTask(taskObject2)
ToDoList.addTask(taskObject4)
ToDoList.addTask(taskObject5)
ToDoList.updateTask(2, { title: 'Данные номер 2 (обновлено)', priority: 12 })
ToDoList.updateTask(4, { title: 'Данные номер 4 (обновлено)', priority: 1 })
ToDoList.sortTask('priority')
ToDoList.removeTask(1)
console.log(ToDoList.tasks)

// Реализация Алексея

const toDoListAlexey = {
	tasks: [],
	lastId: 0,
	isValidData(data) {
		if (!data) {
			console.log('Данные не переданы')
			return false
		}
		if (typeof data !== 'object') {
			console.log('Переданные данные не являются объектом')
			return false
		}
		return true
	},
	getTaskById(taskId) {
		const task = this.tasks.find(({ id }) => id === taskId)
		if (!task) {
			console.log(`Задача с id ${taskId} еще не добавлена в ваш список дел.`)
		}
		return task
	},
	addTask(data) {
		const isValid = this.isValidData(data)
		if (!isValid) {
			return this
		}

		this.tasks.push({
			...data,
			id: ++this.lastId,
			createdAt: Date.now(),
			updatedAt: null,
		})
		return this
	},
	removeTask: function (id) {
		const task = this.getTaskById(id)
		if (task) {
			this.tasks = this.tasks.filter((el) => el.id !== id)
		}
		return this
	},

	updateTask(id, newData) {
		const isValid = this.isValidData(newData)
		if (!isValid) {
			return this
		}
		const task = this.getTaskById(id)

		if (task) {
			Object.assign(task, { ...newData, updatedAt: Date.now() })
		}
		return this
	},

	sortTasks: function (sortBy = 'id', desc = false) {
		const ALLOW_KEYS = [...new Set(this.tasks.map(Object.keys).flat())]

		if (!ALLOW_KEYS.includes(sortBy)) {
			console.log(
				`Нет такого ключа, доступные ключи: [${ALLOW_KEYS.join(', ')}]`
			)
			return this
		}

		this.tasks.sort(({ [sortBy]: a }, { [sortBy]: b }) => {
			if (typeof a === 'symbol' || typeof b === 'symbol') {
				console.log('Значения с типом "Symbol" не сортируются')
				return
			}
			if (typeof a === 'string') {
				return desc ? b.localeCompare(a) : a.localeCompare(b)
			} else {
				a ??= 0
				b ??= 0
				return desc ? b - a : a - b
			}
		})

		return this
	},
}

const data1 = {
	name: 'Corbin',
	age: 27,
	level: 5,
	meat: undefined,
}
const data2 = {
	name: 'Dallas',
	age: 18,
	level: 12,
	meat: true,
}
const data3 = {
	name: 'Yunger',
	age: 33,
	level: 8,
	meat: false,
}

toDoListAlexey.addTask(data1).addTask(data2).addTask(data3)

toDoListAlexey.updateTask(2, { hp: 100 }).sortTasks('hp', 1)
console.log(toDoListAlexey.tasks)
