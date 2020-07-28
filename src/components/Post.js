import React, { Component } from 'react'
import Edit from './Edit'

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            value:false
        }
        
    }
    editted=()=>{
        this.setState({
            value:true
        })
        
    }
    render() {
        const {post}=this.props
        return (
            <div>
                <h2>{post.product} <button onClick={this.editted}>edit</button> </h2>
                {this.state.value?<Edit value={post}/>:''}
            </div>
        
        )
}
}
