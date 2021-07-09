import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div> Welcome to React</div>

        // return(
        //     this.state.isLoggedIn ? 
        //         ( <div> Welcome to React</div> ) : 
        //         ( <div> Welcome to Guest</div> )
        // )


        // let message;
        // if(this.state.isLoggedIn){
        //     message = <div> Welcome to React</div>
        // } else {
        //     message = <div> Welcome to Guest</div>
        // }
        // return <div> {message} </div>


        // if ( this.state.isLoggedIn){
        //     return (<div> Welcome to React</div>)
        // } else{
        //     return ( <div> Welcome to Guest </div>)
        // }
        // return (
        //     <div>
        //         <div> Welcome to React</div>
        //         <div> Welcome to Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
