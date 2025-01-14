/*
    Необходимо написать функцию, которая удаляет все ключи из первого объекта, которые есть во втором объекте
*/

interface IA {
	a: number
	b: string
	c: boolean
	d: number
	e: boolean
}

interface IB {
	a: number
	b: string
	e: number
}

type DifferenceKeys<T, U> = Exclude<keyof T, keyof U>
type Difference<T, U> = Pick<T, DifferenceKeys<T, U>>

type TmpResult = Difference<IA, IB> // {c: ..., d: ...}

function getDifference<T extends object, U extends object>(
	objA: T,
	objB: U
): Difference<T, U> {
	const difference = {} as Difference<T, U>

	for (const key in objA) {
		if (!(key in objB)) {
			;(difference as any)[key] = objA[key] //Можно ли повторно типизировать таким образом?
		}
	}

	return difference
}

let a: IA = {
	a: 10,
	b: '',
	c: false,
	d: 5,
	e: true,
}

let b: IB = {
	a: 10,
	b: '',
	e: 1,
}

const result = getDifference(a, b)
console.log(result)
