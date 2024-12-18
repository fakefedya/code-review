export class User {
	constructor(task) {
		this.task = task
	}

	do() {
		console.log(this.task.run())
	}
}
