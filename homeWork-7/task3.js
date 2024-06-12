function divide(numerator, denominator) {
	if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error(`The input should contain only numbers`);
	} else if (denominator === 0) {
		throw new Error('Denominator must be greater than 0');
	} else return numerator / denominator;
}

try {
	console.log(divide(8, 2));
} catch (error) {
	console.log(error);
} finally {
	console.log(`The work is finished`);
}
