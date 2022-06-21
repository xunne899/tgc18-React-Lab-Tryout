import React from "react";

class SurveyForm extends React.Component {
  state = {
    name: "",
    gender: "",
    colour: "",
    country: "",
    fruits: []
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={this.state.gender}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Select your favourite colours</label>
          <input
            type="radio"
            name="colour"
            value="red"
            onChange={this.updateFormField}
            checked={this.state.colour === "red"}
          />
          <span>Red</span>
          <input
            type="radio"
            name="colour"
            value="green"
            onChange={this.updateFormField}
            checked={this.state.colour === "green"}
          />
          <span>Green</span>
          <input
            type="radio"
            name="colour"
            value="blue"
            onChange={this.updateFormField}
            checked={this.state.colour === "blue"}
          />
          <span>Blue</span>
        </div>
        <div>
          <label>Select your country</label>
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
            onChange={this.updateFruitsV3}
            checked={this.state.fruits.includes("apple")}
          />
          <span>Apple</span>
          <input
            type="checkbox"
            value="banana"
            name="fruits"
            onChange={this.updateFruitsV3}
            checked={this.state.fruits.includes("banana")}
          />
          <span>Banana</span>
          <input
            type="checkbox"
            value="orange"
            name="fruits"
            onChange={this.updateFruitsV3}
            checked={this.state.fruits.includes("orange")}
          />
          <span>Orange</span>
          <input
            type="checkbox"
            value="durian"
            name="fruits"
            onChange={this.updateFruitsV3}
            checked={this.state.fruits.includes("durian")}
          />
          <span>Durian</span>
        </div>
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

  // the most straight forward way
  // two cases:
  // case 1: the value is already in the array
  //          -> remove it from the array
  // case 2: the value is not in the array
  //          -> then we add it to the array
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
}

export default SurveyForm;
