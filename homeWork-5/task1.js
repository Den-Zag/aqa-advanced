const averageGrade = 85;
//1
if (averageGrade <= 59) {
	console.log(`Незадовільно`);
} else if (averageGrade >= 60 && averageGrade <= 70) {
	console.log(`Задовільно`);
} else if (averageGrade >= 71 && averageGrade <= 80) {
	console.log(`Добре`);
} else if (averageGrade >= 81 && averageGrade <= 90) {
	console.log(`Дуже добре`);
} else if (averageGrade >= 91) {
	console.log(`Відмінно`);
}

// 2
if (averageGrade >= 0 && averageGrade <= 59) {
	console.log(`Незадовільно`);
} else if (averageGrade >= 60 && averageGrade <= 70) {
	console.log(`Задовільно`);
} else if (averageGrade >= 71 && averageGrade <= 80) {
	console.log(`Добре`);
} else if (averageGrade >= 81 && averageGrade <= 90) {
	console.log(`Дуже добре`);
} else if (averageGrade >= 91 && averageGrade <= 100) {
	console.log(`Відмінно`);
} else {
	console.log(`Вказане значення "${averageGrade}" не потрапляє у діапазон можливої кількості балів від "0" до "100"`);
}

//3
let text;
if (averageGrade <= 59) text = `Незадовільно`;
if (averageGrade >= 60 && averageGrade <= 70) text = `Задовільно`;
if (averageGrade >= 71 && averageGrade <= 80) text = `Добре`;
if (averageGrade >= 81 && averageGrade <= 90) text = `Дуже добре`;
if (averageGrade >= 91 && averageGrade <= 100) text = `Відмінно`;
console.log(text);
