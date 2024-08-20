'use strict'

/*
  Сделать функцию получения координат пользователя, используя Geolocation API, но преобразовав его в Promise  
*/

navigator.geolocation.getCurrentPosition((position) => {
	doSomething(position.coords.latitude, position.coords.longitude)
})
