import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        const {name} = this.props;
        return <h1> {name} I am a class Component</h1>
    }
}

export default Welcome;