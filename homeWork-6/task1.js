function  rectangleArea (width, height){
  let area = (width * height)
  return area
}

//function declaration
function rectangleArea2(width, height){
  return width * height
}

//function expression
const rectangleArea3 = function(width, height){
  return width * height
}

//arrow function
const rectangleArea4 = (width, height) => width * height

console.log(rectangleArea(5, 10))
console.log(rectangleArea2(5, 20))
console.log(rectangleArea3(5, 30))
console.log(rectangleArea4(5, 40))
