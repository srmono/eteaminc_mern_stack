import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        return <h1> {this.props.name} I am a class Component</h1>
    }
}

export default Welcome;