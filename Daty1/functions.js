// create funciton

function welcome(){
    console.log("hi i am a function")
}

welcome; //function return itself

//
function sum(a, b){
  return a + b;
}

function orderTotal(){
   var total = 0;
   for( a of arguments){
       total += a;
   }
   return total
}

//hoisting
test()
function test(){
    console.log("i am hoisted")
}
//testTwo()
var testTwo = function (){
    console.log("i am literal")
}

testTwo();

// self invoking function

(function(name){
    console.log( "Hey " + name + " i am self invoking function")
})("JavaScript")

