// function func(){
//     console.log('hello');
//     const int = 309 
//     const string = 'dsfsdfsdfsdfsdfsd'
//     console.log(int + string);
// }

// func();




// const sayHello = function(){
//     console.log('hello')
// }

// sayHello()

// function getNumber() {
//     return 1000
// }

// const num = getNumber

// console.log(num);

// function getFullName(firstName, lastName){
//     console.log(firstName + ' ' + lastName);
// }

// const firstName = 'adolf'
// const lastName = 'hitler'

// getFullName(firstName, lastName)

// const num1 = +prompt('write first number')
// const num2 = +prompt('write second number')

// function calc(num1, num2){
//     console.log(num1 +  num2);
// }

// calc(num1, num2)



// const firstNum = +prompt('write first number')
// const secondNum = +prompt('write second number')

// function calculate(first, second) {
//     console.log(first * second );
// }

// calculate(firstNum, secondNum)
// calculate(345,2)
// calculate(123,5)
// calculate(9393,0.0002)

const array = [10, 5, 9, 8, 20];
const array2 = [4, 2, 1, 6];
const array3 = [10, 10, 10, 10, 10];
const array4 = [124,123,3213,123,12,312,3,12,312]

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
 return sum
}

console.log(getSum(array4));
console.log(getSum(array));
console.log(getSum(array2));
console.log(getSum(array3));