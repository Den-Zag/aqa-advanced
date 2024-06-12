const averageGrade = 85;
switch (true) {
	case averageGrade < 60:
		console.log('Незадовільно');
		break;
	case averageGrade < 71:
		console.log('Задовільно');
		break;
	case averageGrade < 81:
		console.log('Добре');
		break;
	case averageGrade < 91:
		console.log('Дуже добре');
		break;
	default:
		console.log('Відмінно');
}
