const adressLat = 1,
	adressLong = 2,
	positionLat = -10,
	positionLong = 2

/*
Вычисление расстояния между двумя точками на плоскости
Формула: AB = √((xb - xa)2 + (yb - ya)2)
*/
console.log(
	Math.sqrt((positionLat - adressLat) ** 2 + (positionLong - adressLong) ** 2)
)
