import React, {useState} from 'react'

function HookObject() {
    const [name, setName] = useState({firstName: "", lastName: ""})

    return (
        <div>
            <input 
                type="text" 
                value={name.firstName} 
                onChange={e => setName({ ...name, firstName: e.target.value}) } />
            <input 
                type="text" 
                value={name.lastName} 
                onChange={e => setName({...name, lastName: e.target.value}) } />

            <h3> FirstName Is : {name.firstName}</h3>
            <h3> LastName  Is : {name.lastName}</h3>
            <h1> {JSON.stringify(name)} </h1>
        </div>
    )
}

export default HookObject

