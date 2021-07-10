import React from 'react'

function Course({courseName}) {

    if(courseName == "Article"){
        throw new Error("Not a Course")
    }

    return (
        <div>
            {courseName}
        </div>
    )
}

export default Course
