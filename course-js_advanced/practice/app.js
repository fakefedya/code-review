'use strict'
function getCoordinates() {
	return new Promise((res, rej) => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				res({ latitude: coords.latitude, longitude: coords.longitude })
				console.log(res)
			},
			(err) => {
				rej(err)
			}
		)
	})
}

async function getMyCity() {
	try {
		const { latitude, longitude } = await getCoordinates()

		const response = await fetch(
			`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
		)
		if (!response.ok) {
			throw new Error(response.status)
		}
		const data = await response.json()
		console.log(data.city)
	} catch (e) {
		console.error(e)
	}
}
getMyCity()
