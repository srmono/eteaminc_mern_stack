// Nullish coalescing operator 
// let user = null;
// let profession = null;
// let firstname = null;

// alert( user ?? profession ?? firstname ?? "Anonymous")

// //Map()
// set(key,vlaue)
// get(key)
// has(key)
// delete(key)
// clear()
// size()

// let myMap = new Map();
// myMap.set("one", "personone");
// myMap.set("two", "personTwo");
// myMap.set("three", "personThree");

// let shop = new Map(
//     [
//         ["fruits", "bulk"],
//         ["pulses", "min"],
//         ["dal", "bulk"]
//     ]
// )
// for( let item of shop.values()){
//     for(let item of shop){
//         console.log(item)
//     }
// }

// let emp1 = {name: "venkat"}
// let emp2 = {name: "Archana"}
// let emp3 = {name: "nitya"}

// let employees = new Set();
// employees.add(emp1)
// employees.add(emp2)
// employees.add(emp3)
// employees.add(emp1)


//Generator function

function* generateSum(){
    
    yield 1;
    yield 2;
    yield 3;
    yield 4;

    return 2+3;
}

let gen = generateSum();

for( let val of gen){
    
    console.log(val)
}