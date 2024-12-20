import axios from 'axios'

const API_URL: string = 'https://dummyjson.com/users'

enum Gender {
	Male = 'male',
	Female = 'female',
}

enum Role {
	User = 'user',
	Moderator = 'moderator',
	Admin = 'admin',
}

enum BloodGroup {
	PositiveA = 'A+',
	NegativeA = 'A-',
	PositiveB = 'B+',
	NegativeB = 'B-',
	PositiveO = 'O+',
	NegativeO = 'O-',
	PositiveAB = 'AB+',
	NegativeAB = 'AB-',
}

enum Color {
	Green = 'Green',
	Brown = 'Brown',
	Gray = 'Gray',
	Amber = 'Amber',
	Blue = 'Blue',
	Black = 'Black',
	Blond = 'Blond',
}

enum HairType {
	Curly = 'Curly',
	Straight = 'Straight',
	Wavy = 'Wavy',
	Kinky = 'Kinky',
}

interface ICoordinates {
	lat: number
	lng: number
}

interface IAdress {
	address: string
	city: string
	state: string
	stateCode: string
	postalCode: string
	coordinates: ICoordinates
	country: string
}

interface IHair {
	color: Color
	type: HairType
}

interface IBank {
	cardExpire: string
	cardNumber: string
	cardType: string
	currency: string
	iban: string
}

interface ICompany {
	department: string
	name: string
	title: string
	address: IAdress
}

interface ICrypto {
	coin: string
	wallet: string
	network: string
}

interface IUser {
	id: number
	firstName: string
	lastName: string
	maidenName: string
	age: number
	gender: Gender
	email: string
	phone: string
	username: string
	password: string
	birthDate: string
	image: string
	bloodGroup: BloodGroup
	height: number
	weight: number
	eyeColor: Color
	hair: IHair
	ip: string
	address: IAdress
	macAddress: string
	university: string
	bank: IBank
	company: ICompany
	ein: string
	ssn: string
	userAgent: string
	crypto: ICrypto
	role: Role
}

interface IDataSuccess {
	status: number
	users: IUser[]
}

interface IDataFail {
	status: number
	statusText: string
}

interface IResponseSuccess {
	status: number
	data: IDataSuccess
}

interface IResponseFail {
	status: number
	data: IDataFail
}

type Res = IResponseSuccess | IResponseFail

function isSuccessResponse(response: Res): response is IResponseSuccess {
	if (response.status === 200) {
		return true
	} else {
		throw new Error(`Код ошибки: ${response.status}`)
	}
}

function assertUsers(data: unknown): asserts data is IDataSuccess {
	if (typeof data === 'object' && !!data && 'users' in data) {
		return
	}
	throw new Error('Users не найдены')
}

function getUsersFromData(response: Res): IUser[] {
	if (isSuccessResponse(response)) {
		assertUsers(response.data)
		return response.data.users
	} else {
		throw new Error(response.data.statusText)
	}
}

async function requestToAPI(): Promise<IUser[] | undefined> {
	try {
		const response: IResponseSuccess = await axios.get(API_URL)
		const users = getUsersFromData(response)
		console.log(users)
		return users
	} catch (error) {
		console.error(error)
	}
}

requestToAPI()
