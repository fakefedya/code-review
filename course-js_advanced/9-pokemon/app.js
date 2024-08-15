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

const requestSend = (url, method = 'GET') => {
	const request = new XMLHttpRequest()
	request.open(method, url)
	request.send()

	return request
}

const pokeRequest = requestSend(pokeAPI.summarizeURL())

pokeRequest.addEventListener('load', function () {
	const { abilities } = JSON.parse(pokeRequest.responseText)
	const dittoFirstAbilityURL = abilities[0].ability.url

	const abilityEffectRequest = requestSend(dittoFirstAbilityURL)
	abilityEffectRequest.addEventListener('load', function () {
		const { effect_entries } = JSON.parse(abilityEffectRequest.responseText)
		// console.log(effect_entries)
		const enEffect = effect_entries.filter((el) => el.language.name === 'en')[0]
			.effect
		console.log(enEffect)
	})
})
