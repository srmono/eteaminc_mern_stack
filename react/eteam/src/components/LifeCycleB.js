import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "React in b"
        }
        console.log("LifecycleB in Constructor")
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("LifecycleB in getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifecycleB in componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("LifecycleB in shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleB in getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log("LiveCycleB in componentDidUpdate")
    }

    

    render() {
        console.log("LifecycleB in Render")
        return (
            <div>
                This is LifecycleB component
                
            </div>
        )
    }
}

export default LifecycleB
