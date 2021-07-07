// var x = 10;
// let y = 10;
// const z = 10;



/// Arrow function

//let sum = () => "I am a function"
//let sum = a => a+3
//let sum = (a,b) => a+3+b

//let sum = (a, b = 5) => a+b
//this context
//sum()

var name = "venkat";
var prof = "training";

var obj = {
   name, 
   prof,
   "get Name"(){
       return this.name;
   }
}

// Destruction

var tools = ["html", "css", "js", "php", "node"]

// var a = tools[0]
// var b = tools[1]

var [a,b,c,d,e] = tools;

var laptop = { brand: "lenovo", ram:"16gb"}

let {brand, ram } = laptop;