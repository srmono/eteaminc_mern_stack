import React, { Component } from 'react'
import {UserConsumer} from './useContext'

export class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (userName) => {
                        return <div> Hello {userName} </div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
