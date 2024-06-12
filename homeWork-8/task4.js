const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterForEvenNumbers1(numbers) {
	let evensNumbers = numbers.filter((number) => number % 2 === 0);
	return evensNumbers;
}

function filterForEvenNumbers2(numbers) {
	let even = [];
	for (let i = 0; i < numbers[i]; i++)
		if (numbers[i] % 2 === 0) {
			even.push(numbers[i]);
		}
	return even;
}

console.log(filterForEvenNumbers1(array));
console.log(filterForEvenNumbers2(array));
