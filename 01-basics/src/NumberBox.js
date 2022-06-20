import React from 'react'

export default class NumberBox extends React.Component{

    state = {
        count: this.props.initial
    }
    
    initialnum =() =>{
        this.setState({
            count : 0
        })
    }

    click = () =>{
       this.setState({
        count: this.state.count + 1
       })
    }

    reset = () =>{
        this.setState({
            count:""
        })
    } 
    render(){
        return (
            <div 
                onMouseEnter = {this.initialnum}
                onMouseOut = {this.reset}
                onClick={this.click} style={{
                border:"1px solid black",
                padding:"10px",
                width:"20px"
            }}>{this.state.count}</div>
        )
    }
}