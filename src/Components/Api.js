import React from "react";
import Home from "../Home";

class Api extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2").then((resp) =>
      resp.json().then((result) => {
        console.log(result);
        this.setState({ user: result.data });
      })
    );
  }
  render() {
    return (
      <div>
        This is home page
        <div>
          {this.state.user
            ? this.state.user.map((userName, i) => (
                <div>
                  {i}-{userName.first_name} {userName.last_name}-
                  {userName.email}
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}
// class Api extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       user: null,
//     };
//   }
//   componentDidMount() {
//     fetch("https://reqres.in/api/users?page=2").then((resp) =>
//       resp.json().then((result) => {
//         console.log(result);
//         this.setState({ user: result.data });
//       })
//     );
//   }
//   render() {
//     return (
//       <div>
//         {this.state.user.map((item, i) => (
//           <div>{i}</div>
//         ))}
//       </div>
//     );
//   }
// }
export default Api;
