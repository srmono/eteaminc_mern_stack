import React, { Profiler } from 'react';

// function Greet() {
//     return <h1> Hello I am a Functional component</h1>
// }
const Greet = (props) => {
    //console.log(props)
    const {name, prof} = props;
    return (
        <div>
            <h1> Hello {name} your prof is {prof}</h1>
        </div>
    )
}

export default Greet