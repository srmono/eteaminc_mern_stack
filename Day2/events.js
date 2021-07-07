function display(ev){
    if(true){
        ev.stopImmediatePropagation()
    }
    console.log("hey i am an event")
}

function display2(e){
    e.preventDefault();
    console.log("hey i am an event display 2")
}

function parentEvent(e){
    //e.stopPropagation();
    //console.log(e.target)
    console.log(e.currentTarget)
    //console.log("parent element")
}
// function childEvent(e){
//     e.stopPropagation();
//     console.log("child element")
// }

var p1 = document.getElementById('parent1')
var p2 = document.getElementById('parent2')
var c1 = document.getElementById('child1')
var c2 = document.getElementById('child2')
var anc =  document.getElementById("anc");

anc.addEventListener( "click", display2 )


//c1.addEventListener("click", childEvent)
p1.addEventListener("click", parentEvent)
p1.addEventListener("click", display)
p1.addEventListener("click", display2)

//c2.addEventListener("click", childEvent)
//p2.addEventListener("click", parentEvent)


//Object.event = function(){}
// el.onclick = function(){
//     alert("hey i am an event")
// }?

