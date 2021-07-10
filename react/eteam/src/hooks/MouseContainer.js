import React, {useState} from 'react'
import ScreenHook from './ScreenHook'

function MouseContainer() {

    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={ () => {
                setDisplay(!display)
            }}> Toggle Display</button>
            
            { display && <ScreenHook /> }
        </div>
    )
}

export default MouseContainer
