const isAdult = (age) => {
	if (age >= 18) {
		return true;
	}
	return false;
};

console.log(isAdult(15));
console.log(isAdult(25));
