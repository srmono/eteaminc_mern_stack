import React, { Component } from 'react'
import withCounter from './withCounter'

export class ClickCounter extends Component {

    render() {
        //const { count } = this.state
        const {count, incrementCount} = this.props
        return <button onClick={incrementCount}> {this.props.name}  Clicked {count} Time</button>
    }
}

export default withCounter(ClickCounter, 2)
