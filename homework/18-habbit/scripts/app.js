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
		iconField: document.querySelector('.popup-form input[name="icon"]'),
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

function resetForm(form, fields) {
	for (const field of fields) {
		form[field].value = ''
	}
}

function validateAndGetFormData(form, fields) {
	const formData = new FormData(form)
	const res = {}
	for (const field of fields) {
		const fieldValue = formData.get(field)
		form[field].classList.remove('error')
		if (!fieldValue) {
			form[field].classList.add('error')
		}
		res[field] = fieldValue
	}
	let isValid = true
	for (const field of fields) {
		if (!res[field]) {
			isValid = false
		}
	}
	if (!isValid) {
		return
	}
	return res
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
	document.location.replace(document.location.pathname + '#' + activeHabbitId)
	reRenderMenu(activeHabbit)
	reRenderHead(activeHabbit)
	reRenderContent(activeHabbit)
}

/* work with days */

function addDays(event) {
	event.preventDefault()
	const formData = validateAndGetFormData(event.target, ['comment'])
	if (!formData) {
		return
	}
	habbits = habbits.map((habbit) => {
		if (globalActiveHabbitId === habbit.id) {
			return {
				...habbit,
				days: habbit.days.concat([{ comment: formData.comment }]),
			}
		}
		return habbit
	})
	resetForm(event.target, ['comment'])
	reRender(globalActiveHabbitId)
	saveData()
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
	page.popup.popupWindow.classList.contains('cover-hidden')
		? page.popup.popupWindow.classList.remove('cover-hidden')
		: page.popup.popupWindow.classList.add('cover-hidden')
}

/* work with habbits */

function setIcon(context, icon) {
	page.popup.iconField.value = icon
	const activeIcon = document.querySelector(
		'.icon-select .menu-item.menu-item-active'
	)
	activeIcon.classList.remove('menu-item-active')
	context.classList.add('menu-item-active')
}

function addHabbit(event) {
	event.preventDefault()
	const maxId = habbits.reduce(
		(acc, habbit) => (acc > habbit.id ? acc : habbit.id),
		0
	)
	const formData = validateAndGetFormData(event.target, [
		'name',
		'target',
		'icon',
	])
	habbits.push({
		id: maxId + 1,
		icon: formData.icon,
		name: formData.name,
		target: formData.target,
		days: [],
	})
	resetForm(event.target, ['name', 'target'])
	togglePopup()
	saveData()
	reRender(maxId + 1)
	// page.popup.popupWindow.classList.add('cover-hidden')
}

/* init */

;(() => {
	loadData()
	const hashId = Number(document.location.hash.replace('#', ''))
	const urlHabbit = habbits.find((habbit) => habbit.id === hashId)
	if (urlHabbit) {
		reRender(urlHabbit.id)
	} else {
		reRender(habbits[0].id)
	}
})()
