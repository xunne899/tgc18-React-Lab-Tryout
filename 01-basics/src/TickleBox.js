import React from "react";
export default class Ticklebox extends React.Component{
    state = {
        notes:""
    }
}

tickle = () =>{
    this.setState({
        notes:"Tickling me"
    })
}

resetTickle = () => {
    this.setState({
        notes:""
    })
}

render() {
    return(
        <div
            onMouseEnter = {this.tickle}
            onMouseOut = {this.resetTickle}
            style={{
                border: " 1px solid black",
                width : "50px",
                height: "50px"
            }}
            >
            {this.state.notes}
        </div>
    )
}  