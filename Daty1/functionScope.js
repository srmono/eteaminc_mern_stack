var name = "JS"; // global

// function simple(){
//     var y = 1000;
//     console.log(y);
//     return y;
//     console.log(y)//after return no lines will execute
// }

function parent() {
    var tool ="html";
    // console.log("tool inside function",tool)
    // console.log(name)

    function child(){
        var x  = 10;
    }
}
parent()

//console.log("tool outside function",tool)