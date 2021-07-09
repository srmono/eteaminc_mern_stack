import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}> Greet to Parent </button> */}
            <button onClick={() => props.greetHandler('child')}> Greet to Parent </button>
        </div>
    )
}

export default ChildComponent
