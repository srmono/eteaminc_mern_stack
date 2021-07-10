import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounter extends Component {

    render() {
        //const {count} = this.state
        const {count, incrementCount} = this.props
        return <h3 onMouseOver={incrementCount}> Hovered {count} times </h3>
    }
}

export default withCounter(HoverCounter, 3)
