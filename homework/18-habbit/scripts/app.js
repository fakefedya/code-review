'use strict'

let habbits = []
const HABBIT_KEY = 'HABBIT_KEY'
let globalActiveHabbitId

/* page */
const page = {
	menu: {
		habbitButton: document.querySelector('.menu-list'),
		addHabbitButton: document.querySelector('.menu-add'),
	},
	header: {
		h1: document.querySelector('.h1'),
		progressPercent: document.querySelector('.progress-percent'),
		progressCurrent: document.querySelector('.progress-current'),
	},
	main: {
		daysContainer: document.getElementById('days'),
		nextDay: document.querySelector('.habbit-day'),
	},
	popup: {
		popupWindow: document.querySelector('.cover'),
		popupCloseButton: document.querySelector('.popup-close'),
	},
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
			page.menu.habbitButton.appendChild(element)
			continue
		}
		if (activeHabbit.id === habbit.id) {
			existed.classList.add('menu-item-active')
		} else {
			existed.classList.remove('menu-item-active')
		}
	}
}

function reRenderHead(activeHabbit) {
	page.header.h1.innerText = activeHabbit.name
	const progress =
		activeHabbit.days.length / activeHabbit.target > 1
			? 100
			: (activeHabbit.days.length / activeHabbit.target) * 100
	page.header.progressPercent.innerText = `${progress.toFixed(0)}%`
	page.header.progressCurrent.setAttribute('style', `width : ${progress}%`)
}

function reRenderContent(activeHabbit) {
	page.main.daysContainer.innerHTML = ''
	for (const index in activeHabbit.days) {
		const element = document.createElement('div')
		element.classList.add('habbit')
		element.innerHTML = `<div class="habbit-day">День ${Number(index) + 1}</div>
			<div class="habbit-comment">
				${activeHabbit.days[index].comment}
			</div>
			<button type="button" class="habbit-delete" onclick="deleteDay(${Number(
				index
			)})">
				<img src="./images/icon-delete.svg" alt="Удалить день ${Number(index) + 1}" />
			</button>`
		page.main.daysContainer.appendChild(element)
	}
	page.main.nextDay.innerHTML = `День ${activeHabbit.days.length + 1}`
}

function reRender(activeHabbitId) {
	globalActiveHabbitId = activeHabbitId
	const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId)
	if (!activeHabbit) {
		return
	}
	reRenderMenu(activeHabbit)
	reRenderHead(activeHabbit)
	reRenderContent(activeHabbit)
}

/* work with days */

function addDays(event) {
	event.preventDefault()
	const form = event.target
	const data = new FormData(form)
	const comment = data.get('comment')
	form['comment'].classList.remove('error')
	if (!comment) {
		form['comment'].classList.add('error')
	} else {
		habbits = habbits.map((habbit) => {
			if (globalActiveHabbitId === habbit.id) {
				return {
					...habbit,
					days: habbit.days.concat([{ comment }]),
				}
			}
			return habbit
		})
		form['comment'].value = ''
		reRender(globalActiveHabbitId)
		saveData()
	}
}

function deleteDay(dayIndex) {
	habbits = habbits.map((habbit) => {
		if (habbit.id === globalActiveHabbitId) {
			habbit.days.splice(dayIndex, 1)
		}
		return habbit
	})
	reRender(globalActiveHabbitId)
	saveData()
}

/* toggle popup */

function togglePopup() {
	if (!page.menu.addHabbitButton) {
		return
	}
	page.menu.addHabbitButton.addEventListener('click', () => {
		if (page.popup.popupWindow.classList.contains('cover-hidden')) {
			page.popup.popupWindow.classList.remove('cover-hidden')
		}
	})
	page.popup.popupCloseButton.addEventListener('click', () => {
		if (!page.popup.popupWindow.classList.contains('cover-hidden')) {
			page.popup.popupWindow.classList.add('cover-hidden')
		}
	})
}

/* init */

;(() => {
	loadData()
	reRender(habbits[0].id)
	togglePopup()
})()
