abstract class Logger {
	abstract log(message: string): void

	printDate(date: Date): void {
		this.log(date.toString())
	}
}

class MyLogger extends Logger {
	log(message: string): void {
		console.log(message)
	}
	logWithDate(message: string): void {
		this.printDate(new Date())
		this.log(message)
	}
}

const logger = new MyLogger()
logger.logWithDate('Вот мое СМС')
