let getFilms3 = await fetch(`https://swapi.dev/api/films/3/`)
let getDataFilm3 = await getFilms3.json()

let getPlanetsUrls = getDataFilm3.planets

let result = []
for (let getPlanetsUrl of getPlanetsUrls){
  let resPlanet = await fetch(getPlanetsUrl)
  let getDataPlanet = await resPlanet.json()
  let getResidentUrls = getDataPlanet.residents
  let planetObj = {
    planetName: getDataPlanet.name,
    residents: []
  }
  
  for (let getResidentUrl of getResidentUrls){
    let getResResident = await fetch(getResidentUrl)
    let getDataResident = await getResResident.json()
    let getNameResident =  await getDataResident.name
    planetObj.residents.push(getNameResident)
  }
  
  result.push(planetObj)
}

console.log(result)
