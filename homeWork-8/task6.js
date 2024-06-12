const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

function copySort(nambers) {
	let clone = nambers.slice();
	clone.sort((a, b) => a - b);
	return `nambers: ${nambers}\nclone: ${clone}`;
}

console.log(copySort(numbersList));
