'use strict'

const pokeAPI = {
	protocol: 'https://',
	domain: 'pokeapi.co',
	path: '/api/v2/pokemon/',
	endpoint: 'ditto',

	summarizeURL() {
		const fullAPI = this.protocol + this.domain + this.path + this.endpoint

		return fullAPI
	},
}

function getPokeData(url, errorMessage, method = 'GET') {
	return fetch(url, {
		method,
	}).then((response) => {
		if (!response.ok) {
			throw new Error(`${errorMessage}: ${response.status}`)
		}
		return response.json()
	})
}

getPokeData(
	pokeAPI.summarizeURL(),
	`Не удалось получить покемона ${pokeAPI.endpoint}`
)
	.then(({ abilities }) => {
		return getPokeData(
			abilities[0].ability.url,
			'Ошибка получения способности покемона'
		)
	})
	.then(({ effect_entries }) => {
		const enEffect = effect_entries.filter((el) => el.language.name === 'en')[0]
			.effect
		console.log(enEffect)
	})
	.catch((error) => {
		console.log(error.message)
	})
