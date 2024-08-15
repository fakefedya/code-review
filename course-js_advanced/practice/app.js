'use strict'

const res = fetch('https://dummyjson.com/products')
	.then(
		(response) => response.json(),
		(error) => console.log(error)
	)
	.then(
		({ products }) => {
			return fetch('https://dummyjson.com/products/' + products[0].id)
		},
		(error) => console.log(error)
	)
	.then((response) => response.json())
	.then((data) => {
		console.log(data)
	})
	.catch((error) => console.log(error))
	.finally(() => {
		console.log('Finally')
	})
