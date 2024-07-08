const ToDoList = {
	lastId: 10000,
	tasks: [],

	taskAdd(data) {
		if (!data) {
			return this
		}

		data.id = ++this.lastId
		this.tasks = [...this.tasks, data] // Удобный способ стекинга в массив
		return this
	},
	taskGet: function (id) {
		return this.tasks.find(({ id: taskId }) => taskId === id)
	},

	taskRemove(id) {
		this.tasks = this.tasks.filter((task) => task.id !== id)
		return this
	},

	taskUpdate(id, data) {
		// data = {title: 'Новое название, priority: 22}
		const task = this.taskGet(id)
		if (!task) {
			return this
		}
		// task = {id: 4, title: 'Я заголовок', proirity: 4}
		Object.assign(task, data) //!!!!!!!!!!!!!!!!!!
		// task = {id: 4, title: 'Новое название', proirity: 22}
		return this
	},
	taskSort: function (sortedBy, desc = false) {
		const ALLOW_SORT_PARAMS = ['id', 'priority']

		if (!ALLOW_SORT_PARAMS.includes(sortedBy)) {
			sortedBy = 'id'
		}

		this.tasks.sort(({ [sortedBy]: a }, { [sortedBy]: b }) =>
			desc ? b - a : a - b
		)
		return this
	},
	taskSortById: function (desc = false) {
		this.tasks.sort(({ id: a }, { id: b }) => (desc ? b - a : a - b))
		return this
	},
	taskSortByPriority: function (desc = false) {
		this.tasks.sort(({ priority: a }, { priority: b }) =>
			desc ? b - a : a - b
		)
		return this
	},
}

const data1 = { title: 'Данные номер 1', priority: 5 },
	data2 = { title: 'Данные номер 2', priority: 2 },
	data3 = { title: 'Данные номер 3', priority: 7 },
	data4 = { title: 'Данные номер 4', priority: 4 },
	data5 = { title: 'Данные номер 5', priority: 11 }

ToDoList.taskAdd(data1)
	.taskAdd(data2)
	.taskAdd(data3)
	.taskAdd(data4)
	.taskAdd(data5)
	.taskRemove(10003)
	.taskUpdate(10004, { title: 'Новое название', priority: 22 })
	.taskSort('priority', true)

console.log(ToDoList.tasks)
