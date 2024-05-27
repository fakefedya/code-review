const crypto = (pwd) => {
	const pwdLength = pwd.length
	if (pwdLength < 6) {
		console.log('Длина пароля должна быть не менее 6 символов!')
		return
	}
	const pwdStartReversedArray = pwd
		.slice(0, -(pwdLength / 2))
		.split('')
		.reverse()
	const pwdEndReversedArray = pwd
		.slice(-(pwdLength / 2))
		.split('')
		.reverse()
	return pwdStartReversedArray.concat(pwdEndReversedArray).join('')
}
const check = (pwd, pwdcrypto) => {
	const pwdCrypto = crypto(pwd)
	if (!pwdCrypto) {
		return
	}
	if (pwdCrypto !== pwdcrypto) {
		console.log('Полученный результат не совпадает с исходным паролем!')
		return
	}
	console.log('Полученный результат совпадает с исходным паролем!')
}
check('PurpleSchool', 'elpruPloohcS')
check('Fedya', 'aydeF')
