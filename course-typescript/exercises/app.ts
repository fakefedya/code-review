// 8.9. Упражнение - Валидация форм
/*
	Необходимо сделать тип для результата валидации формы, основываясь на типе формы
*/

interface IForm {
	name: string
	password: string
}

const form: IForm = {
	name: 'Вася',
	password: '123',
}

const formValidation: Validation<IForm> = {
	name: { isValid: true },
	password: {
		isValid: false,
		errorMessage: 'Длина пароля нге менее 5 символов!',
	},
}

type Validation<T> = {
	[K in keyof T]:
		| {
				isValid: true
		  }
		| {
				isValid: false
				errorMessage: string
		  }
}
