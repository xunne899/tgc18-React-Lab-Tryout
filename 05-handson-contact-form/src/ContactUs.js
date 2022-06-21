import React from "react";

export default class ContactUs extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    enquiry: "",
    country: "",
    contacts: []
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submitForm}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              onChange={this.updateFormField}
              value={this.state.firstName}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={this.updateFormField}
              value={this.state.lastName}
            />
          </div>
          <div>
            <label>Type of enquiry</label>
            <input
              type="radio"
              name="enquiry"
              value="support"
              onChange={this.updateFormField}
              checked={this.state.enquiry === "support"}
            />
            <span>Support</span>
            <input
              type="radio"
              name="enquiry"
              value="sales"
              onChange={this.updateFormField}
              checked={this.state.enquiry === "sales"}
            />
            <span>Sales</span>
            <input
              type="radio"
              name="enquiry"
              value="marketing"
              onChange={this.updateFormField}
              checked={this.state.enquiry === "marketing"}
            />
            <span>Marketing</span>
          </div>
          <div>
            <label>Country:</label>
            <select
              name="country"
              value={this.state.country}
              onChange={this.updateFormField}
            >
              <option value="sg">Singapore</option>
              <option value="my">Malaysia</option>
              <option value="th">Thailand</option>
            </select>
          </div>
          <div>
            <label>Means of Contact</label>
            <input
              type="checkbox"
              name="contacts"
              value="email"
              onChange={this.updateContact}
            />
            <span>Email</span>
            <input
              type="checkbox"
              name="contacts"
              value="phone"
              onChange={this.updateContact}
            />
            <span>Phone</span>
            <input
              type="checkbox"
              name="contacts"
              value="snail-mail"
              onChange={this.updateContact}
            />
            <span>Snail Mail</span>
          </div>
          <input type="submit" disabled={!this.isValid()} />
        </form>
      </React.Fragment>
    );
  }

  isValid() {
    let valid =
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.enquiry.length > 0 &&
      this.state.country.length > 0 &&
      this.state.contacts.length > 0;
    console.log("valid =", valid);
    return valid;
  }

  submitForm = (e) => {
    e.preventDefault(); // prevent the form from being submitted by browser

    // if we want to submit the form later
    // e.target.submit();
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateContact = (e) => {
    if (this.state.contacts.includes(e.target.value)) {
      // case 1: the checkbox has already been checked, and now it's being unchecked
      // 1. clone
      const clone = this.state.contacts.slice();
      // 2. modify
      const indexToRemove = this.state.contacts.findIndex(function (c) {
        return c === e.target.value;
      });
      clone.splice(indexToRemove, 1);
      // 3. replace
      this.setState({
        contacts: clone
      });
    } else {
      // case 2: the checkbox has not been checked and now it's being checked
      // 1. clone the array
      const clone = [...this.state.contacts];
      // 2. modify the clone
      clone.push(e.target.value);
      // 3. replace the clone into state
      this.setState({
        contacts: clone
      });
    }
  };
}
