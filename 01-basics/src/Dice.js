import React from "react";

export default class Dice extends React.Component{
    state = {
        count : 0
    };

    click = () =>{
        this.setState({
            // count: this.state.count + 1
            count:  Math.floor(Math.random()*6 + 1)
        });
    }

    changeTextcolor=()=>{
     
        let TextColor = "purple"
        if(this.state.count == 1){
            TextColor = "red"
        }
        if(this.state.count == 6){
            TextColor = "green"
        }
        return TextColor
    }
    
    render(){
        // let output = null;
        // if(this.state.count){
        //     // output = 
        //     Math.floor(Math.random()*6 + 1)
        // }
 
    return(
        <React.Fragment>
        <div 
        onClick={this.click}
        style={{
            border:"1px solid black",
            padding: "10px",
            width:"100px",
            color: this.changeTextcolor()
        }}
    >{this.state.count}
    {/* {output} */}
 </div>
 </React.Fragment>
      )
   } 
}