import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // each time component render, this hook will call
    useEffect(() => {
        console.log("Use Effect called")
        document.title = `You clicked ${count} time`
    }, [count])

    return (
        <div>
            <input 
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)} />

            <button onClick={ () => setCount( count +1 )}> Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
