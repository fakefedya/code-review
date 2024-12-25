class UserService {
	private static db: any

	static getUser(id: number) {
		return UserService.db.findById(id)
	}

	create() {
		UserService.db
	}

	static {
		UserService.db = 'asd'
	}
}

UserService.getUser(1)
const inst = new UserService()
inst.create()
