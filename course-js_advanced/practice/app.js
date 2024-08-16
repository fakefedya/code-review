'use strict'

const res = fetch('https://dummyjson.com/productss')
	.then((response) => {
		if (!response.ok) {
			throw new Error(`Is error: ${response.status}`)
		}
		return response.json()
	})
	.then(({ products }) => {
		return fetch('https://dummyjson.com/products/' + products[0].id)
	})
	.then((response) => {
		if (!response.ok) {
			throw new Error(`Is error: ${response.status}`)
		}
		return response.json()
	})
	.then((data) => {
		console.log(data)
	})
	.catch((error) => {
		document.body.innerHTML = error.message
	})
