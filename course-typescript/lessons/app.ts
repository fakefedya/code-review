interface User {
	login: string
	password?: string
}

const user: User = {
	login: 'a@a.ru',
}

function multiply(first: number, second?: number): number {
	if (!second) {
		return first * first
	}
	return first * second
}

multiply(5)

interface UserPro {
	login: string
	password?: {
		type: 'primary' | 'secondary'
	}
}

function testPass(user: UserPro) {
	const t = user.password?.type
}

function test(param?: string) {
	const t = param ?? multiply(5)
}
