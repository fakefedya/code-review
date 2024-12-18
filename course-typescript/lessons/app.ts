enum StatusCode {
	SUCCESS = 200,
	IN_PROGRESS = 500,
	FAILED = 400,
}

const res = {
	message: 'Платеж успешен',
	statusCode: StatusCode.SUCCESS,
}

/*
	200 Успех
	'p' В процессе
	400 Отклонен
*/

if (res.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {}
action(StatusCode.FAILED)

function compute() {
	return 200
}

const enum Roles {
	ADMIN = 1,
	USER = 2,
}

const res2 = Roles.ADMIN
