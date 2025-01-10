//8.3. Упражнение - Пишем функцию группировки

interface IData {
	group: number
	name: string
}

const data: IData[] = [
	{ group: 1, name: 'Вася' },
	{ group: 2, name: 'Федя' },
	{ group: 1, name: 'Паша' },
]

type key = string | number | symbol

interface IGroup<T> {
	[key: key]: T[]
}

function group<T extends Record<key, any>>(
	array: T[],
	key: keyof T
): IGroup<T> {
	return array.reduce<IGroup<T>>((map: IGroup<T>, item) => {
		const itemKey = item[key]
		let currentElement = map[itemKey]
		if (Array.isArray(currentElement)) {
			currentElement.push(item)
		} else {
			currentElement = [item]
		}
		map[itemKey] = currentElement
		console.log(map)
		return map
	}, {})
}

group(data, 'group')
