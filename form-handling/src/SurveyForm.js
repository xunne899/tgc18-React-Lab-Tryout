import React from "react" ;

export default class SurveyForm extends React.Component {
    state = {
        'name':'',
        'color':'',
        'country':'',
        'fruits':[]
    }



    // // 1. check if the value is already in the array
    // let currentValues = this.state[e.target.name];
    // let modifiedValues;
    
    // // 2. Check if the currently checked checkboxes' values include the target checkbox we just changed
    // if (!currentValues.includes(e.target.value)) {
    // // if the target checkbox's value does not exist in the array of currently checked values, it means we are checking the checkbox, so we add the value to the array
    //     modifiedValues = [...currentValues, e.target.value];
    // } else {
    //     // the value is already in the array, means we are unchecking
    //     // so we should remove the checkbox's value from the array
    //     modifiedValues = currentValues.filter((element)=>{
    //         // return true if we want to keep this particular element
    //         // keep the element that we didn't just uncheck
    //         return element !== e.target.value;
    //     })
    // }

    // this.setState({
    //     [e.target.name]: modifiedValues
    // })


updateFormField = (e) =>{

    this.setState({
        [e.target.name]: e.target.value
    })


}



render(){
    return (
        <React.Fragment>
            <div>
                <label>Name:</label>  
                <input name="name" type="text" value={this.state.name} onChange={this.updateFormfield}/> 
            </div>
            <div>
                <label>Favourite Colour:</label>
                <input name="color" type="radio" value="red" checked={this.state.color ==='red'} onChange={this.updateFormField}/>Red
                <input name="color" type="radio" value="blue" checked={this.state.color ==='blue'} onChange={this.updateFormField} />Blue
                <input name="color" type="radio" value="green" checked={this.state.color ==='green'} onChange={this.updateFormField}/>Green
            </div>
            <div>
                <label>Country:</label>
                <select name="country" value={this.state.country} onChange={this.updateFormField}>
                    <option value = "singapore">Singapore</option>
                    <option value = "malaysia">Malaysia</option>
                    <option value = "indonesia">Indonesia</option>
                </select>
            </div>
            <div>
             <label>Fruits:</label> 
              <input type="checkbox" name="fruits" value="apple" checked={this.state.fruits.includes('apple')}/>Apple  
              <input type="checkbox" name="fruits" value="orange"checked={this.state.fruits.includes('orange')}/>Orange 
              <input type="checkbox" name="fruits" value="pineapple"checked={this.state.fruits.includes('pineapple')}/>Pineapple 
              <input type="checkbox" name="fruits" value="durian"checked={this.state.fruits.includes('durian')}/>Durian 
            </div>
            <button>Submit</button>
        </React.Fragment>
    )
}

}



