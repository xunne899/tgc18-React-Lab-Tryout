import React from "react";

export default class Dice extends React.Component{
    state = {
        count : 0
    };

    click = () =>{
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){
        let output = null;
        if(this.state.count){
            output = Math.floor(Math.random()*6 + 1)
        }
    return(<div 
        onClick={this.click}
        style={{
            border:"1px solid black",
            padding: "10px",
            width:"100px"
        }}
    >{output}
 </div>
      )
   } 
}