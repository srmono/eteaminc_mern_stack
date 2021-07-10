import React, {useState, useEffect} from 'react'

function ScreenHook() {
    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);

    const logMousePosition = e => {
        console.log("mouse event called")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("User Effect Called")
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log("component unmounting code")
            window.removeEventListener('mousemove', logMousePosition)
        }

    }, [])

    return (
        <div>
            Screen X - {x}  Y - {y}
        </div>
    )
}

export default ScreenHook
