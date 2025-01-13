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
