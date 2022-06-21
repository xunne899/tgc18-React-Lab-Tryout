import React from "react";

class SurveyForm extends React.Component {
  state = {
    name: "",
    gender: "",
    colour: "",
    country: ""
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.updateName}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            value={this.state.gender}
            onChange={this.updateGender}
          />
        </div>
        <div>
          <label>Select your favourite colours</label>
          <input
            type="radio"
            name="colour"
            value="red"
            onChange={this.updateColour}
            checked={this.state.colour === "red"}
          />
          <span>Red</span>
          <input
            type="radio"
            name="colour"
            value="green"
            onChange={this.updateColour}
            checked={this.state.colour === "green"}
          />
          <span>Green</span>
          <input
            type="radio"
            name="colour"
            value="blue"
            onChange={this.updateColour}
            checked={this.state.colour === "blue"}
          />
          <span>Blue</span>
        </div>
      </React.Fragment>
    );
  }
  // event handlers: remember to use arrow functions
  // all event handlers have one argument, the event object.
  updateName = (evt) => {
    this.setState({
      name: evt.target.value
    });
  };

  updateGender = (evt) => {
    this.setState({
      gender: evt.target.value
    });
  };

  updateColour = (evt) => {
    this.setState({
      // evt.target will refer to the radio button that has been changed
      colour: evt.target.value
    });
  };
}

export default SurveyForm;
