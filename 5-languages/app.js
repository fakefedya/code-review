const userLanguage = prompt('EN / RU / DE?').toLowerCase()
switch (true) {
	case userLanguage === 'en':
		console.log('Hello!')
		break
	case userLanguage === 'ru':
		console.log('Привет!')
		break
	case userLanguage === 'de':
		console.log('Gutten tag!')
		break
	default:
		console.log('??')
}
