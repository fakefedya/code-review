'use strict'

let habbits = []
const HABBIT_KEY = 'HABBIT_KEY'

/* page */
const page = {
	menu: document.querySelector('.menu-list'),
}

/* utils */

function loadData() {
	const habbitsString = localStorage.getItem(HABBIT_KEY)
	const habbitArray = JSON.parse(habbitsString)
	if (Array.isArray(habbitArray)) {
		habbits = habbitArray
	}
}

function saveData() {
	localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits))
}

/* render */

function reRenderMenu(activeHabbit) {
	if (!activeHabbit) {
		return
	}
	document.querySelector('.menu-list').innerHTML = ''
	for (const habbit of habbits) {
		const existed = document.querySelector(`[menu-habbit-id="${habbit.id}]"`)
		if (!existed) {
			const element = document.createElement('button')
			element.setAttribute('menu-habbit-id', habbit.id)
			element.classList.add('menu-item')
			element.addEventListener('click', () => reRender(habbit.id))
			element.innerHTML = `<img src="./images/icon-${habbit.icon}.svg" alt="${habbit.name}"/>`
			if (activeHabbit.id === habbit.id) {
				element.classList.add('menu-item-active')
			}
			page.menu.appendChild(element)
			continue
		}
		if (activeHabbit.id === habbit.id) {
			existed.classList.add('menu-item-active')
		} else {
			existed.classList.remove('menu-item-active')
		}
	}
}

function renderHead(activeHabbit) {}

function reRender(activeHabbitId) {
	const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId)
	reRenderMenu(activeHabbit)
	renderHead(activeHabbit)
}

/* init */

;(() => {
	loadData()
	reRender(habbits[0].id)
})()
