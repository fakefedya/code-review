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
		let taskId = this.tasks.slice(',').pop().id + 1
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

toDoList.taskAdd('Повторение материала по JS', 3)
toDoList.taskAdd('Погулять с собакой', 5)
toDoList.taskAdd('Запланировать поход к стоматологу', 6)
toDoList.taskRemove(3)
toDoList.taskRemove(5)
toDoList.taskAdd('Организовать вечернюю прогулку', 2)
toDoList.taskAdd('Перезвонить по номеру ____', 2)
toDoList.taskUpdate('Погулять с кошкой', 4, 4)
toDoList.taskSortByParameter('toLow', 'priority')
console.log(toDoList.tasks)
