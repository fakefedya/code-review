'use strict'

async function getRandomFact() {
	const URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random'
	const response = await fetch(URL)
	return response.json()
}

async function main() {
	try {
		const cardsWrapper = document.querySelector('.cards')
		cardsWrapper.style.display = 'flex'
		cardsWrapper.style.gap = '16px'
		cardsWrapper.innerHTML = ``
		const res = await Promise.all([
			getRandomFact(),
			getRandomFact(),
			getRandomFact(),
		])
		for (const el of res) {
			const card = document.createElement('div')
			card.style.color = '#fff'
			card.style.border = '1px solid red'
			card.innerHTML = el.text
			cardsWrapper.appendChild(card)
		}
	} catch (e) {
		console.error(e)
	}
}
