// // Нова, чудово для співбесіди | Сортування по порядку
// console.log(array)
// let array = [4, 1, 3, 2, 5,]
// let sortedArray = [...array].sort() // [ 1, 2, 3, 4, 5 ]
// let sortedArray2 = array.toSorted() // [ 1, 2, 3, 4, 5 ]
// console.log(array)
// console.log(sortedArray)
// console.log(sortedArray2)
// ---
//
// const validate = (n, d) => {
//   if(d === 0 || d === null){
//     throw new Error(`denominator cannot be 0`)
//   }
//   if (isNaN(n) || isNaN(d)){
//     throw new Error(`at one value is not a number`)
//   }
// }

// const divideTwoNumbers = (n, d) => {
//   try{
//     validate(n, d)
//     return n/d
//   }
//   catch (error){
//     return `${error}`
//   }
// }

// console.log(divideTwoNumbers(6, 2))
// console.log(divideTwoNumbers(6, 0))
// ---

// class Book {
//   constructor(name, author, year){
//     this._name = name
//     this._author = author
//     this._year = year
//   }

//   get name(){return this._name}
//   set name(name){ this._name = name}

// }

// eslint-disable-next-line no-undef
const book = new Book('test1', 'test2', 1234)
book.name = 'wwwww'
console.log(book.name)
