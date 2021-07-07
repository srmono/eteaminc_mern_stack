// Spread and Rest Operators

function sum(...num){
    var total = 0;
    for(n of num){
        total += n
    }
    return total
}

var tools = ["html","css","js","react","node","mongodb"]

var [a, c, ...b] = tools;


var name = "venkat";
var profession = "Tech Guru"

console.log( `User is ${name}, He is a ${profession}` )