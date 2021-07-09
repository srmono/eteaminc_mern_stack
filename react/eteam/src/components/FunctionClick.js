import React from 'react';
//rfce : to create functional component

function FunctionClick() {
    function clickHandler(){
        console.log("click handler")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
