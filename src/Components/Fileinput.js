import React from "react";
class Fileinput extends React.Component {
  upload(e) {
    console.log(e.target.file);
  }
  render() {
    return (
      <div>
        <h2>Upload file</h2>
        <input type="file" onChange={(e) => this.upload(e)} />
      </div>
    );
  }
}
export default Fileinput;
