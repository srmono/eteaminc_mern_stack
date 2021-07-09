class User{
    
    constructor(name){
        // invokes the setter
        this.name = name
    }

    get name(){
        return this._name
    }

    set name(value){
        if(value.length < 6){
            alert("Name is tooo short");
            return;
        }

        this._name = value
    }
}

let user = new User("venkat");
