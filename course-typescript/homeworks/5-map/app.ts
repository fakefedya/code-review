type Bucket = { key: string; value: number }

class HashMap {
	private buckets: Bucket[][]
	private capacity: number
	private size: number

	constructor(capacity: number = 16) {
		this.capacity = capacity
		this.buckets = Array.from({ length: capacity }, () => [])
		this.size = 0
	}

	private hash(key: string): number {
		let hash: number = 0
		for (let i: number = 0; i < key.length; i++) {
			hash = (hash * 31 + key.charCodeAt(i)) % this.capacity
		}
		return hash
	}

	set(key: string, value: number): void {
		const index = this.hash(key)
		const bucket = this.buckets[index]
		for (let entry of bucket) {
			if (entry.key == key) {
				entry.value = value
				return
			}
		}

		bucket.push({ key, value })
		this.size++

		if (this.size / this.capacity > 0.75) {
			this.resize()
		}
	}

	get(key: string): number | undefined {
		const index = this.hash(key)
		const bucket = this.buckets[index]

		for (let entry of bucket) {
			if (entry.key === key) {
				return entry.value
			}
		}
		console.log(`Запрошенный ключ "${key}" не найден!`)
		return undefined
	}

	delete(key: string): boolean {
		const index = this.hash(key)
		const bucket = this.buckets[index]

		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i].key === key) {
				bucket.splice(i, 1)
				this.size--
				return true
			}
		}
		return false
	}

	clear(): void {
		this.buckets = Array.from({ length: this.capacity }, () => [])
		this.size = 0
	}

	private resize(): void {
		const newCapacity = this.capacity * 2
		const newBuckets = Array.from({ length: newCapacity }, () => [])
		const oldBuckets = this.buckets

		this.capacity = newCapacity
		this.buckets = newBuckets
		this.size = 0

		for (let bucket of oldBuckets) {
			for (let entry of bucket) {
				this.set(entry.key, entry.value)
			}
		}
	}
}

const map = new HashMap()
map.set('Молоко', 20)
map.set('Печенье', 25)
map.set('Торт', 25)

console.log(map.get('Молоко'))
console.log(map.get('Печенье'))
console.log(map.get('Торт'))

map.delete('Молоко')
console.log(map.get('Молоко'))
console.log(map.get('Печенье'))

map.clear()
console.log(map.get('Печенье'))
