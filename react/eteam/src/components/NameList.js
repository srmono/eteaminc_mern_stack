import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: "venkat",
            age: 32,
            skill: "React"
        },
        {
            id: 2,
            name: "Nitya",
            age: 32,
            skill: "Node"
        },
        {
            id: 3,
            name: "Prityanka",
            age: 32,
            skill: "Express"
        }
    ]
    const names = ["React", "Express", "MongoDB", "Node"]
    //const nameList = names.map( name => <h2>{name}</h2>) 
    const personList = persons.map(person => <Person person={person}></Person>)
    return (

        <div> {personList} </div>
        // <div>
        //     {
        //        names.map( name => <h2>{name}</h2>) 
        //     }
        // </div>
        // <div>
        //     <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>
        //     <h2>{names[2]}</h2>
        //     <h2>{names[3]}</h2>
        // </div>
    )
}

export default NameList
