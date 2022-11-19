import React from "react";
class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: "bruce", email: "bruce@gmail.com", passwor: "123" },
        { name: "mike", email: "mike@gmail.com", passwor: "111" },
        { name: "chalr", email: "chal@gmail.com", passwor: "222" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <div className="div">
          {this.state.list.map((e) => (
            <div className="card">
              <span>Name:{e.name} </span>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Map;
