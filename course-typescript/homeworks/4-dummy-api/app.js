'use strict'
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value)
				  })
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value))
				} catch (e) {
					reject(e)
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value))
				} catch (e) {
					reject(e)
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected)
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next())
		})
	}
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod }
	}
Object.defineProperty(exports, '__esModule', { value: true })
const axios_1 = __importDefault(require('axios'))
const url = 'https://dummyjsonы.com/users'
var Gender
;(function (Gender) {
	Gender['Male'] = 'male'
	Gender['Female'] = 'female'
})(Gender || (Gender = {}))
var Role
;(function (Role) {
	Role['User'] = 'user'
	Role['Moderator'] = 'moderator'
	Role['Admin'] = 'admin'
})(Role || (Role = {}))
var BloodGroup
;(function (BloodGroup) {
	BloodGroup['PositiveA'] = 'A+'
	BloodGroup['NegativeA'] = 'A-'
	BloodGroup['PositiveB'] = 'B+'
	BloodGroup['NegativeB'] = 'B-'
	BloodGroup['PositiveO'] = 'O+'
	BloodGroup['NegativeO'] = 'O-'
	BloodGroup['PositiveAB'] = 'AB+'
	BloodGroup['NegativeAB'] = 'AB-'
})(BloodGroup || (BloodGroup = {}))
var Color
;(function (Color) {
	Color['Green'] = 'Green'
	Color['Brown'] = 'Brown'
	Color['Gray'] = 'Gray'
	Color['Amber'] = 'Amber'
	Color['Blue'] = 'Blue'
	Color['Black'] = 'Black'
	Color['Blond'] = 'Blond'
})(Color || (Color = {}))
var HairType
;(function (HairType) {
	HairType['Curly'] = 'Curly'
	HairType['Straight'] = 'Straight'
	HairType['Wavy'] = 'Wavy'
	HairType['Kinky'] = 'Kinky'
})(HairType || (HairType = {}))
function isSuccessResponse(response) {
	if (response.status === 200) {
		return true
	} else {
		throw new Error(`Код ошибки: ${response.status}`)
	}
}
function assertUsers(obj) {
	if (typeof obj === 'object' && !!obj && 'id' in obj) {
		return
	}
	throw new Error('Users не найдены')
}
function getUserData() {
	return __awaiter(this, void 0, void 0, function* () {
		try {
			const response = yield axios_1.default.get(url)
			if (isSuccessResponse(response)) {
				const users = response.data.users
				console.log(users)
				return users
			}
		} catch (error) {
			console.error(error)
		}
	})
}
getUserData()
