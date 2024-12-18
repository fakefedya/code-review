const skills: string[] = ['dev', 'devops', 'testing']

for (const skill of skills) {
	console.log(skill.toLocaleUpperCase())
}

const res = skills
	.filter((s: string) => s !== 'devops')
	.map((s) => s + '! ')
	.reduce((a, b) => a + b)

console.log(res)

/*
	3.8. Tuples
*/

const skill: [number, string] = [1, 'dev']
const [id, skillName] = skill
const arr: [number, string, ...boolean[]] = [1, 'dev', true, false, true]
