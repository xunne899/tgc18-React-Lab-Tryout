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


// updateFormField = (e) =>{

//     this.setState({
//         [e.target.name]: e.target.value
//     })


// }

render() {
    return (
      <React.Fragment>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.updateFormField}
          />
        </div>

        <div>
          <label>Gender:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.updateGender}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.updateEmail}
          />
        </div>
        <div>
          <label>Select your favourite colours</label>
          <input
            type="radio"
            name="color"
            value="red"
            onChange={this.updateColour}
            checked={this.state.colour === "red"}
          />
          <span>Red</span>
          <input
            type="radio"
            name="color"
            value="green"
            onChange={this.updateColour}
            checked={this.state.colour === "green"}
          />
          <span>Green</span>
          <input
            type="radio"
            name="color"
            value="blue"
            onChange={this.updateColour}
            checked={this.state.colour === "blue"}
          />
          <span>Blue</span>
        </div>
        <div>
          <label>Select your favourite food</label>
          <select
            name="country"
            value={this.state.country}
            onChange={this.updateFormField}
          >
            <option value="sg">Singapore</option>
            <option value="my">Malaysia</option>
            <option value="in">Indonesia</option>
          </select>
        </div>
        <div>
          <label>Select your favourite fruits</label>
          <input
            type="checkbox"
            value="apple"
            name="fruits"
            onChange={this.updateFruitsV4}
            checked={this.state.fruits.includes("apple")}
          />
          <span>Apple</span>
          <input
            type="checkbox"
            value="banana"
            name="fruits"
            onChange={this.updateFruitsV4}
            checked={this.state.fruits.includes("banana")}
          />
          <span>Banana</span>
          <input
            type="checkbox"
            value="orange"
            name="fruits"
            onChange={this.updateFruitsV4}
            checked={this.state.fruits.includes("orange")}
          />
          <span>Orange</span>
          <input
            type="checkbox"
            value="durian"
            name="fruits"
            onChange={this.updateFruitsV4}
            checked={this.state.fruits.includes("durian")}
          />
          <span>Durian</span>
        </div>
        <button>Submit</button>
      </React.Fragment>
    );
  }
  updateFormField = (evt) => {
    // evt.target.value : contains the value of the element
    // evt.target.name : contains the name of the element
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  updateFruits = (evt) => {
    if (this.state.fruits.includes(evt.target.value)) {
      // case 1: the array already  have the value

      // 1. clone
      let clone = this.state.fruits.slice();

      // 2. modify the clone
      let indexToRemove = this.state.fruits.findIndex(function (fruit) {
        return fruit === evt.target.value; // <-- evt.target.value is the value of the checkbox that has been just checked
      });
      clone.splice(indexToRemove, 1);

      // 3 replace
      this.setState({
        fruits: clone
      });
    } else {
      // case 2: the array don't have the value
      // 1. make a clone of the original array
      let clone = this.state.fruits.slice();

      // 2. change the clone
      clone.push(evt.target.value);

      // 3. replace the array in the state with the clone
      this.setState({
        fruits: clone
      });
    }
  };

  updateFruitsV2 = (evt) => {
    if (this.state.fruits.includes(evt.target.value)) {
      let clone = this.state.fruits.filter(function (f) {
        return f !== evt.target.value;
      });
      this.setState({
        fruits: clone
      });
    } else {
      // 1. clone
      // eg. if fruits = ['apples','oranges']
      const clone = [...this.state.fruits];
      // => const clone = ['apples', 'oranges']

      // 2. modify
      clone.push(evt.target.value);

      // 3. replace
      this.setState({
        fruits: clone
      });
    }
  };

  updateFruitsV3 = (evt) => {
    if (this.state.fruits.includes(evt.target.value)) {
      let indexToRemove = this.state.fruits.findIndex(
        (f) => f === evt.target.value
      );
      let clone = [
        ...this.state.fruits.slice(0, indexToRemove),
        ...this.state.fruits.slice(indexToRemove + 1)
      ];
      this.setState({
        fruits: clone
      });
    } else {
      // const clone = [...this.state.fruits, evt.target.value];
      // eg. if fruits = ['apples','oranges']
      // then: const clone = [...this.state.fruits]
      //    => const clone = ["apples", "oranges"]

      this.setState({
        fruits: [...this.state.fruits, evt.target.value]
      });
    }
  };

  updateFruitsV4 = (evt) => {
    if (this.state.fruits.includes(evt.target.value)) {
      // let indexToRemove = this.state.fruits.findIndex(
      //   (f) => f === evt.target.value
      // );
      // let clone = [
      //   ...this.state.fruits.slice(0, indexToRemove), // <-- only includes those before index to remove
      //   ...this.state.fruits.slice(indexToRemove + 1) // <-- only includes those after index to remove
      // ];
      // this.setState({
      //   fruits: clone
      // });
      let indexToRemove = this.state.fruits.findIndex(
        (f) => f === evt.target.value
      );
      this.setState({
        fruits: [
          ...this.state.fruits.slice(0, indexToRemove),
          ...this.state.fruits.slice(indexToRemove + 1)
        ]
      });
    } else {
      // const clone = [...this.state.fruits, evt.target.value];
      // eg. if fruits = ['apples','oranges']
      // then: const clone = [...this.state.fruits]
      //    => const clone = ["apples", "oranges"]

      this.setState({
        fruits: [...this.state.fruits, evt.target.value]
      });
    }
  };

  updateName = (evt) => {
    this.setState({
      name: evt.target.value
    });
  };
  updateColour = (evt) => {
    this.setState({
      colour: evt.target.value
    });
  };
  updateGender = (evt) => {
    this.setState({
      gender: evt.target.value
    });
  };
  // updateCountry = (evt) => {
  //   this.setState({
  //     country: evt.target.value
  //   });
  // };

  updateEmail = (evt) => {
    this.setState({
      email: evt.target.value
    });
  };
}

// export default SurveyForm;


// render(){
//     return (
//         <React.Fragment>
//             <div>
//                 <label>Name:</label>  
//                 <input name="name" type="text" value={this.state.name} onChange={this.updateFormfield}/> 
//             </div>
//             <div>
//                 <label>Favourite Colour:</label>
//                 <input name="color" type="radio" value="red" checked={this.state.color ==='red'} onChange={this.updateFormField}/>Red
//                 <input name="color" type="radio" value="blue" checked={this.state.color ==='blue'} onChange={this.updateFormField} />Blue
//                 <input name="color" type="radio" value="green" checked={this.state.color ==='green'} onChange={this.updateFormField}/>Green
//             </div>
//             <div>
//                 <label>Country:</label>
//                 <select name="country" value={this.state.country} onChange={this.updateFormField}>
//                     <option value = "singapore">Singapore</option>
//                     <option value = "malaysia">Malaysia</option>
//                     <option value = "indonesia">Indonesia</option>
//                 </select>
//             </div>
//             <div>
//              <label>Fruits:</label> 
//               <input type="checkbox" name="fruits" value="apple" checked={this.state.fruits.includes('apple')}/>Apple  
//               <input type="checkbox" name="fruits" value="orange"checked={this.state.fruits.includes('orange')}/>Orange 
//               <input type="checkbox" name="fruits" value="pineapple"checked={this.state.fruits.includes('pineapple')}/>Pineapple 
//               <input type="checkbox" name="fruits" value="durian"checked={this.state.fruits.includes('durian')}/>Durian 
//             </div>


//             <button>Submit</button>
//         </React.Fragment>
//     )
// }

// }



