import React from "react";

export default class Numplusminus extends React.Component{
    state = {
        count : 0
    };

    increment = () =>{
        this.setState({
            count:this.state.count + 1
        });
    };

    decrement = () =>{
        this.setState({
            count: this.state.count - 1
        });
    };

    getTextColor(){
        let backgroundColor = "grey";

        if(this.state.count <= 10 || this.state.count >= 0){
            backgroundColor  = "purple"
        }

        if(this.state.count > 10){
            backgroundColor  = "green"
        }

        if(this.state.count < 0){
            backgroundColor  = "red"
        }
    
     return backgroundColor
    }

    render(){
        // let backgroundColor = "grey";

        // if(this.state.count <= 10 || this.state.count >= 0){
        //     backgroundColor  = "purple"
        // }

        // if(this.state.count > 10){
        //     backgroundColor  = "green"
        // }

        // if(this.state.count < 0){
        //     backgroundColor  = "red"
        // }


     return (
        <React.Fragment>
                <div
          style={{
            border: "1px solid red",
            height: "40px",
            width: "40px",
            marginTop: "10px",
            padding: "10px",
            color: this.getTextColor()
          }}
        >
          {this.state.count}
        </div>
        <button onClick={this.increment}>+</button>
       <button onClick={this.decrement}>-</button>
        </React.Fragment>
     )
    }

}