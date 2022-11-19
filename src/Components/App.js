import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./Components.css";
import Form from "./Form";
import Header from "./Header";
import Map from "./Map";
import Api from "./Api";
import Usestate from "./Click";
import Click from "./Click";
import Fileinput from "./Fileinput";
import Footer from "./Footer";
import Home from "../Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
