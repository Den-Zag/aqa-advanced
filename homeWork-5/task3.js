const number = 5;
// for
for (let i = 1; i < 11; i++) {
	let b = number * i;
	console.log(`${number} x ${i} = ${b}`);
}

// white
let count = 0;
while (count < 10) {
	count++;
	let b = number * count;
	console.log(`${number} x ${count} = ${b}`);
}
