interface User {
	name: string
	age?: number
	email: string
}

// Partial делает все поля типа необязательными
type partial = Partial<User>
const p: partial = {}

// Required делает все поля типа обязательными
type required = Required<User>

// Readonly делает поля интерфейса/типа только для чтения
type readonly = Readonly<User>
type requiredAndReadonly = Required<Readonly<User>>

interface PaymentPersistent {
	id: number
	sum: number
	from: string
	to: string
}

/*
	Omit используется для исключения определённых ключей из типа. Например, есть интерфейс Payment, содержащий id, sum, fromString и toString. Используя Omit, можно создать новый тип PaymentWithoutID, исключив из него id.
*/

type Payment = Omit<PaymentPersistent, 'id'>

/*
	Pick, напротив, служит для выбора определённых ключей из типа. Например, из того же интерфейса Payment можно выбрать только fromString и toString.
*/

type PaymentRequisites = Pick<PaymentPersistent, 'from' | 'to'>

/*
Extract позволяет извлечь из объединения типов (union) только те типы, которые соответствуют определённому критерию.
*/

type ExtractEx = Extract<'from' | 'to' | Payment, string>

/*
	Exclude работает наоборот, исключая из объединения типов те, которые соответствуют определённому критерию.
*/

type ExcludeEx = Exclude<'from' | 'to' | Payment, string>

class User {
	constructor(public id: number, public name: string) {}
}

function getData(id: number): User {
	return new User(id, 'Вася')
}

// Для получения типа, который возвращает функция, применяется служебный тип ReturnType
type RT = ReturnType<typeof getData>

// Через Parameters<typeof GetData> мы получаем типы параметров функции, в данном случае number для идентификатора
type PT = Parameters<typeof getData>
type first = PT[0]

/*
	Awaited - это новый служебный тип в TypeScript 4.5, предназначенный для работы с промисами.
	Позволяет извлекать тип результата из промиса. Например, из промиса, возвращающего строку, Awaited поможет получить тип string.
*/

type A = Awaited<Promise<string>>
type A2 = Awaited<Promise<Promise<string>>>

interface IMenu {
	name: string
	url: string
}

async function getMenu() {
	return [{ name: 'Аналитика', url: 'Analytics' }]
}

type R = Awaited<ReturnType<typeof getMenu>>
