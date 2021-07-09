import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "React"
        }
        console.log("LifecycleA in Constructor")
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("LifecycleA in getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifecycleA in componentDidMount")
    }
    
    shouldComponentUpdate(){
        console.log("LifecycleA in shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleA in getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log("LiveCycleA in componentDidUpdate")
    }

    changeSate = () => {
        this.setState({
            name: "Node"
        })
    }

    render() {
        console.log("LifecycleA in Render")
        return (
            <div>
                <div> This is LifecycleA component</div>
                <button onClick={this.changeSate}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

export default LifecycleA
