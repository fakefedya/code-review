"use strict";
const skills = ['dev', 'devops', 'testing'];
for (const skill of skills) {
    console.log(skill.toLocaleUpperCase());
}
const res = skills
    .filter((s) => s !== 'devops')
    .map((s) => s + '! ')
    .reduce((a, b) => a + b);
console.log(res);
/*
    3.8. Tuples
*/
const skill = [1, 'dev'];
