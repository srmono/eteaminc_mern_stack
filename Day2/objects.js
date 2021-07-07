String.prototype.myOwnMethod = function(){ return this.toUpperCase()}

// singleton pattern
// var person = {
//     name: "venkat",
//     prof: "Trainer",
//     getProfession: function(){
//          return this.prof;
//     }
// }

// person.hobbies = ["yoga"]
// person.getName =function(){}

// var x = Object.create(person)

//person.prof

// Constructor Pattern? 
function Laptop(brand, color, ram){
    this.brand = brand;
    this.ram = ram;
    this.color =  color;
    this.getBrand = function(){
        return this.brand
    }
}

Laptop.prototype.os = "windows10";
Laptop.prototype.getOs = function(){
    return this.os;
}

var laptopOne = new Laptop("Lenovo", "Black", "16gb DDR4");
var laptopTwo = new Laptop("Dell", "Black", "16gb DDR4");

laptopOne.processor = "CoreI9"
laptopOne.getProcesor = function(){
    return this.processor
}

laptopOne.processor;

var tools = new Array("html", "css", "js");

tools.length

//document.body.appendChild()
