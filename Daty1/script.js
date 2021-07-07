var tool = "Java Script";

var tools = ["html", "css", "js", { }, [{},{},{}], null ];
tools[2];

var name, age, phone; 

phone = null;

//props, methods
//JSON //

var dog = {
    color: "brown",
    height: 2, // array, num, bool, object
    activities: ["play","run"],
    address: {
        city: "xyz",
        getCity: function(){
            console.log("xyz")
        }
    },
    walk: function(){
        console.log("dog walks")
    },
    eye: "black color"
}
dog.walk()

dog.color = "blue"

// function sum(){
//     console.log("i am a function")
// }

// sum()







