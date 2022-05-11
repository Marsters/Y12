import React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as uuid from 'uuid';

var notes = new Map()

class Remover {
  constructor(id){
    document.getElementById(id).remove()
    notes.delete(id)
  }
}

class Input extends React.Component {

  render() {
    let val = <></>;
    return(
      <>
        <input width="80%" id="finput" name="finput" className="finput" placeholder="Enter Text"></input>
        <button id="btn" name="btn" className="btn" onClick={() => {
          val = document.querySelector("input").value;
          document.querySelector("input").value = "";
          var id= uuid.v1();
          notes.set(id, <li>{val}</li>)
          document.querySelector("ul").insertAdjacentHTML("afterend", `<li id=${id}>${val}<button id="remover"></button></li>`)
          console.log(notes)
          document.getElementById("remover").onclick = () => {new Remover(id)}
        }}>ADD</button>
        <ul>
        </ul>
      </>
    );
  }
}

class Website extends React.Component {
  render() {

    return (
      <div className="main">
        <Input />
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Website />
)