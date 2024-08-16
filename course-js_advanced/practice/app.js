'use strict'

function getData(url, errorMessage, method = 'GET') {
	return fetch(url, {
		method,
	}).then((response) => {
		if (!response.ok) {
			throw new Error(`${errorMessage}: ${response.status}`)
		}
		return response.json()
	})
}

getData('https://dummyjson.com/products', 'Can not get products')
	.then(({ products }) => {
		return getData(
			'https://dummyjson.com/products/' + products[0].id,
			'Can not get product 1'
		)
	})
	.then((data) => {
		console.log(data)
	})
	.catch((error) => {
		document.body.innerHTML = error.message
	})
