// class User{
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi(){
//         console.log(this.name)
//     }
// }

// let user = new User("venkat");

// user.sayHi();

// ///
// function User(name){
//     this.name = name
// }

// User.prototype.sayHi = function(){}

/// Class Expression

// let User = class{
//     sayHi(){
//         alert("hello")
//     }
// }

// new User().sayHi()

// dynamically make classes

// function createClass(text){
//     return class {
//         sayHi(){
//             console.log(text)
//         }
//     }
// }
// let User =  createClass("test");

// new User().sayHi()