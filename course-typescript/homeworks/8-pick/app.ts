type TUser = {
	name: string
	age: number
	skills: string[]
}

const user: TUser = {
	name: 'Федя',
	age: 12,
	skills: ['TS', 'JS'],
}

function pickObjectKeys<TypeObject, KeysObject extends keyof TypeObject>(
	obj: TypeObject,
	keys: KeysObject[]
): Pick<TypeObject, KeysObject> {
	const result = {} as Pick<TypeObject, KeysObject>
	for (const key of keys) {
		result[key] = obj[key]
	}
	console.log(result)
	return result
}

const res_1 = pickObjectKeys(user, ['name', 'skills'])
const res_2 = pickObjectKeys(user, ['age', 'skills'])
