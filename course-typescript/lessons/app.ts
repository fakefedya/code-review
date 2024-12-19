function generateError(message: string): never {
	throw new Error(message)
}

function dumpError(): never {
	while (true) {}
}

function rec(): never {
	return rec()
}

type paymentAction = 'refund' | 'checkout' | 'reject'

function processAction(action: paymentAction) {
	switch (action) {
		case 'refund':
			//....
			break
		case 'checkout':
			//....
			break
		case 'reject':
			//....
			break
		default:
			const _: never = action // "_" Чтобы TS не ругался на неиспользованную переменную
			throw new Error('Нет такого action')
	}
}

function isString(x: string | number): boolean {
	if (typeof x === 'string') {
		return true
	} else if (typeof x === 'number') {
		return false
	}
	generateError('Error message x')
}

console.log(isString(1))
console.log(isString('1'))
