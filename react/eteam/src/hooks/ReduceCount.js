import React, {useReducer} from 'react'

const initialState = 0;
const reducer = (state, action) => {

}

function ReduceCount() {
    useReducer(reducer, initialState);

    return (
        <div>
            <button > Increment </button>
            <button> Decrement </button>
            <button> Reset </button>
        </div>
    )
}

export default ReduceCount
