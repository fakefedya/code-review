'use strict'

const res = fetch('https://dummyjson.com/products')
	.then((response) => response.json())
	.then(({ products }) => {
		return fetch('https://dummyjson.com/products/' + products[0].id)
	})
	.then((response) => response.json())
	.then((data) => {
		console.log(data)
	})
