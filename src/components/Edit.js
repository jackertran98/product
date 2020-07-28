import React, { Component } from 'react'

export default class Edit extends Component {
    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }
    onChangeEdit=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    onEdited=()=>{
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <input type="text" onChange={(e)=>this.onChangeEdit(e)}/>
                <button onClick={this.onEdited}>save</button>
            </div>
        )
    }
}

