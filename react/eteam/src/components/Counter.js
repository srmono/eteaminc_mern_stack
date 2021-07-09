import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log(this.state.count))
        this.setState( (prevState) => ({
            count: prevState.count +1
        }))
    }
    
    incrementFive(){
        this.increment();//1
        this.increment();//1+1
        this.increment(); //2+1
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Counter vlaue is {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
