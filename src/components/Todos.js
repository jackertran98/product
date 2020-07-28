import uniqid from 'uniqid';
import React, { Component } from 'react'


export default class Todos extends Component {
    constructor(props){
        super(props);
        this.state={
            id:uniqid(),
            value:''
        }
    }
    handChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    submited=()=>{
        this.props.onAddPost(this.state.value)  
    }
    render() {
        return (
            <div>
                <input type="text" onChange={(e)=>this.handChange(e)}/>
                <button onClick={this.submited}>add</button>
            </div>
        )
    }
}
