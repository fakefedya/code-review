const warehouse = {
	goods: [],
	findGoodById: function () {},
	addGood: function (good) { 
		this.goods.push({good})
		}
	},
	getWeightKg: function () {},
}

/* Товары */
const car = {
	id: 1,
	weight: {
		kg: 1000,
	},
	brand: 'Ford',
}

const chair = {
	id: 2,
	weight: {
		kg: 2,
	},
}

const paper = {
	id: 3,
	color: 'red',
}

warehouse.addGood('car')
console.log(warehouse.goods)
