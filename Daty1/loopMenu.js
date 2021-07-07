var menu = ["Home", "About", "Services", "Contact"];
var mel = document.getElementById("menu");
var uel = "<ul>";
for (m of menu) {
    uel += "<li> <a href='"+m+".html'>" + m + "</a></li>"
}
uel +=  "</ul>";
mel.innerHTML = uel;