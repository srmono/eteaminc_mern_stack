//Create element
var el = document.createElement("div"); 
//append el
document.body.appendChild(el);
var text = document.createTextNode("Some Dynamic text");
el.appendChild(text)
el.setAttribute("id", "test");
console.log("Before:", el.innerHTML);
el.innerHTML = "<p> new updated text </p>";
console.log( "After", el.innerHTML);

var tool = "Java Script";

var eln = document.getElementById("test");
eln.innerHTML = "<p> My Lovely tool is " + tool + " </p>"

//el.remove();





