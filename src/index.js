import React from 'react';
import * as ReactDOM from 'react-dom/client';
import uuid from 'uuid';

class Note extends React.Component {
  
  render() {
    return (
      <div>
        <ul>
          {this.props.value.c}
        </ul>
      </div>
    )
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"c":1};
  }


  render() {

    return(
      <>
        <input width="80%" id="finput" name="finput" className="finput" placeholder="Enter Text"></input>
        <button id="btn" name="btn" className="btn">ADD</button>
        <Note value={this.state}/>
      </>
    )
  }
}

class Website extends React.Component {
  render() {

    return (
      <div className="main">
        <Input />
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Website />
)