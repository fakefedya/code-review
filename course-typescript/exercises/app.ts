class User {
	skills: string[] = []

	addSkill(skill: string): void
	addSkill(skill: string[]): void
	addSkill(skillOrSkills: string | string[]): void {
		if (typeof skillOrSkills == 'string') {
			this.skills.push(skillOrSkills)
		} else if (Array.isArray(skillOrSkills)) {
			this.skills = this.skills.concat(skillOrSkills)
		} else {
			throw new Error('Передано некорректное умение!')
		}
	}
}

const user = new User()
user.addSkill('Плавать')
user.addSkill('Летать')
user.addSkill(['Бегать', 'Прыгать'])
console.log(user.skills)
