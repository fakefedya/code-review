type User = {
	name: string
	age: number
	skills: string[]
}

type Role = {
	id: number
}

type UserWithRole = User & Role

let user: UserWithRole = {
	name: 'asd',
	age: 33,
	skills: ['1', '2'],
	id: 2,
}
