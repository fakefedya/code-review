'use strict'

async function main() {
	const res = await fetch('https://dummyjson.com/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: 'emilys',
			password: 'emilyspass',
		}),
	})
	const data = await res.json()
	console.log(data)
}

main()
