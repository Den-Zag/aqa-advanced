const user = [
  {name: 'Denys', email: 'DenysZagrebelnyi@mail.com', age: 27},
  {name: 'Max', email: 'Max1990@mail.com', age: 28},
  {name: 'Leo', email: 'leomen@mail.com', age: 30},
  {name: 'Duk', email: 'dukduduk@mail.com', age: 18}
]

for (const {name, email, age} of user) {
  console.log(name, email, age)
}
