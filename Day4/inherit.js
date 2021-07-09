class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`)
    }
    stop(){
        this.speed =0;
        console.log(`${this.name} is still`)
    }
}

//let animal = new Animal("name")

class Rabbit extends Animal{

    constructor(name, earsLength){
        super(name)
        this.earsLength = earsLength
    }
    hide(){
        console.log(`${this.name} hides`)
    }

    stop(){
        super.stop()
        this.hide()
    }
}

let rabbit = new Rabbit("white Rabbit", 10)