'use strict'

class Queue {
	#message = []
	#resolve
	#reject
	#promise

	constructor() {
		const { resolve, reject, promise } = Promise.withResolvers()
		this.#resolve = resolve
		this.#reject = reject
		this.#promise = promise
	}

	add(msg) {
		this.#message.push(msg)
		return this
	}

	close() {
		this.#resolve(this.#message)
	}

	error(reason) {
		this.#reject(reason)
	}

	subscribe() {
		return this.#promise
	}
}

const queue = new Queue()
const sub1 = queue.subscribe()
sub1.then((data) => console.log(data)).catch((error) => console.error(error))
const sub2 = queue.subscribe()
sub2.then((data) => console.log(data)).catch((error) => console.error(error))

// queue.add('msg1').add('msg2').close()
queue.add('msg1').add('msg2').error('Не получен последний пакет')
