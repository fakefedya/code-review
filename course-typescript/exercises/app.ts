/*
	Необходимо написать функцию сортировки любых объектов, которые имеют id по убыванию и по возрастанию
*/

const data = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
]

interface ID {
	id: number
}

function sort<T extends ID>(data: T[], type: string = 'asc'): T[] {
	if (type == 'asc') {
		return data.sort((a, b) => a.id - b.id)
	} else if (type == 'desc') {
		return data.sort((a, b) => b.id - a.id)
	} else {
		throw new Error('Параметр задан неверно')
	}
}

console.log(sort(data, 'desc'))
console.log(sort(data))
console.log(sort(data, 'asd'))

function alterSort<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
	return data.sort((a, b) => {
		switch (type) {
			case 'asc':
				return a.id - b.id
			case 'desc':
				return b.id - a.id
		}
	})
}

console.log(alterSort(data))
console.log(alterSort(data, 'desc'))
