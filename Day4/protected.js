class CoffeeMachine{
    _waterAmount = 0;
    #waterLimit = 200;

    #fixWaterAmount(value){
        if(value < 0 ) value = 0;
        if( value > this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value){
        this.#waterLimit = this.#fixWaterAmount(value)
    }

    setWaterAmount(value){
        if(value < 0 ) value = 0;
        this._waterAmount = value
    }

    getWaterAmount(){
        return this._waterAmount;
    }
}

new CoffeeMachine().setWaterAmount(100)