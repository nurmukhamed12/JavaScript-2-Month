// const getName = (name) => {
//     return name
// }
// function getAge(age) {
//     return age
// }

// function getInfo(getName, getAge) {
//     let name = getName("beka")
//     let age = getAge(12)
//     return name + " he is " + age
// }


// function User(name) {
//     if (!new.target) {
//         return new User(name)
//     }
//     // this = {}
//     this.name = name;
//     this.isAdmin = false;
//     this.sayHi = function () {
//         return "hi, my name is " + this.name
//     }
//     //return this
// }

// let user = new User("beka");
// let secondUser = new User("azamat");


// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// class Salculator{
//     constructor(){
//         this.num1 = +prompt("введи число ");
//         this.num2 = +prompt("введи второе число");
//     }

//     get sum(){
//         return this.num1 + this.num2
//     }
//     get mul(){
//         return this.num1 * this.num2
//     }
// }

// const p = new Salculator()

function getZeroByRecursion(n){
if (n <= 0) {
    return console.log("finish");
}else{
    console.log("call");
    recursion(n-1);
}
}
recursion(100)