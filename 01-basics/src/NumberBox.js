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
            <React.Fragment>
            <div 
                onMouseEnter = {this.initialnum}
                onMouseOut = {this.reset}
                onClick={this.click} style={{
                border:"1px solid black",
                fontSize: `${10 + this.state.count * 5}px`,
                padding:"10px",
                width:"20px"
            }}>{this.state.count}</div>
            { this.state.count % 2 === 0 ? <p>Number is even</p> : null}
            </React.Fragment>
        )
    }
}