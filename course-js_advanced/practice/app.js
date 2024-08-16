'use strict'

/*
	Сделать запрос на https://dummyjson.com/products/categories
	Получит список категорий и отобразить <select> выбора категорий
*/

const URL = 'https://dummyjson.com/products/category-list'

function createSelect(options) {
	document.body.innerHTML = `<select>
		${options.map(
			(optionsEl) => `<option value=${optionsEl}>${optionsEl}</option>`
		)}
	</select>`
}

function getCategories() {
	fetch(URL)
		.then((response) => response.json())
		.then((data) => createSelect(data))
		.catch((error) => console.error(`Ошибка: ${error}`))
}

getCategories()
