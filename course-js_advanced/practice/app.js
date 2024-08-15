'use strict'

/*
	Сделать запрос на https://dummyjson.com/products/categories
	Получит список категорий и отобразить <select> выбора категорий
*/

const URL = 'https://dummyjson.com/products/category-list'

function createSelect(options) {}

function getCategories() {
	fetch(URL)
		.then((response) => response.json())
		.then((data) => console.log(data))
}

getCategories()
