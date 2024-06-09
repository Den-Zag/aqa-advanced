let promisesArray = []
promisesArray.push(fetch(`https://swapi.dev/api/people/14`)
.then((response) => response.json())
.then((json) => json.starships)
)

const planetsName = await Promise.all(promisesArray)
console.log(planetsName)

let planets = []
let data = await fetch(`https://swapi.dev/api/people/14`)
let body = await data.json()
planets.push(body.starships)

console.log(planets)
