const array = [10, 20, 30, 40, 50];

function arraySum(arrayNumbers) {
	return arrayNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(arraySum(array));
