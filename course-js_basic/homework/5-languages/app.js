const userLanguage = prompt('EN / RU / DE?').toLowerCase()
switch (userLanguage) {
	case 'en':
		console.log('Hello!')
		break
	case 'ru':
		console.log('Привет!')
		break
	case 'de':
		console.log('Gutten tag!')
		break
	default:
		console.log('??')
}
