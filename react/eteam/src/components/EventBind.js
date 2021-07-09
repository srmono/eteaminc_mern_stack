import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Hello how are you"
    //     })
    //     console.log(this)
    // }
    clickHandler = () =>{
        this.setState({
                message: "Hello how are you"
            })
    }
    render() {
        return (
            <div>
                <div> {this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Bind Event</button> */}
                {/* <button onClick={() => this.clickHandler() }>Bind Event</button> */}
                <button onClick={this.clickHandler}>Bind Event</button>
            </div>
        )
    }
}

export default EventBind
