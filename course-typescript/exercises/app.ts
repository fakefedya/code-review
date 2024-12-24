class Product {
	constructor(public id: number, public title: string, public price: number) {}
}

class Delivery {
	constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
	constructor(date: Date, public address: string) {
		super(date)
	}
}

type DeliveryOptions = HomeDelivery | ShopDelivery

class ShopDelivery extends Delivery {
	constructor(public shopId: number) {
		super(new Date())
	}
}

class Cart {
	private products: Product[] = []
	private delivery: DeliveryOptions

	public addProduct(product: Product): void {
		this.products.push(product)
	}

	public deleteProduct(productId: number): void {
		this.products = this.products.filter((el: Product) => el.id !== productId)
	}

	public getSum(): number {
		return this.products
			.map((p: Product) => p.price)
			.reduce((price_1: number, price_2: number) => price_1 + price_2)
	}

	public setDelivery(delivery: DeliveryOptions): void {
		this.delivery = delivery
	}

	public checkOut() {
		if (this.products.length == 0) {
			throw new Error('Нет товаров в корзине')
		}
		if (!this.delivery) {
			throw new Error('Нет указан способ доставки')
		}
		return { success: true }
	}
}

const cart = new Cart()
cart.addProduct(new Product(1, 'Хлеб', 75))
cart.addProduct(new Product(2, 'Молоко', 128))
cart.addProduct(new Product(3, 'Шоколад', 20))

cart.deleteProduct(2)

cart.setDelivery(new HomeDelivery(new Date(), ''))

console.log(cart)
console.log(cart.getSum())
console.log(cart.checkOut())
