const car1 = {
  brand: `Peugeot`,
  model: 306,
  year: 1995
}
const car2 = {
  brand: `Volkswagen`,
  model: `Passat`,
  owner: 2017
}
const car3 = {...car1, ...car2}

console.log(car3)