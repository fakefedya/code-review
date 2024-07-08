'use strict'

function removePassword(reset) {
	if (reset) {
		this.password = undefined
	} else {
		this.password = '1'
	}
}

const user = {
	login: 'example@mail.com',
	password: '12345',
}

const removeUserPassword = removePassword.bind(user, true)
removeUserPassword()
