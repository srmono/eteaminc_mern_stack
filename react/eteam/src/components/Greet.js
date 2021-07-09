import React, { Profiler } from 'react';

// function Greet() {
//     return <h1> Hello I am a Functional component</h1>
// }
const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1> Hello {props.name} your prof is {props.prof}</h1>
            {props.children}
        </div>
    )
}

export default Greet