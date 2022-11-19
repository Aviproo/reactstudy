import "./Components.css";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      user: "",
      password: "",
    };
  }
  submit() {
    console.log(this.state);
  }
  render() {
    return (
      <div className="form">
        Form
        <div>
          <input
            type="text"
            name="Avi"
            placeholder="Kartiky"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <br />
        <div>
          <input
            type="email"
            placeholder="Kartiky@gmail.com"
            onChange={(e) => this.setState({ user: e.target.value })}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Kartiky@123"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <button onClick={() => this.submit()}>click</button>
        <div className="reminder">We will contact you with in 24 hours.</div>
      </div>
    );
  }
}
