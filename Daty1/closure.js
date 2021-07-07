//lexical scope
//closure

function init(){
    var name ="venkat";
    function displayName() {
        alert(name)
    }
    //displayName()
    return displayName;
}
var x = init()
x()

// call()
// apply()
// bind()