import "./App.css";
import React, { Component } from "react";

const pagine = [
  `Pagina home 
  Fell confortable 
  pasdas
  sadasd
  sdsadasd
  asddas
  `,
  "Pagina 1 .....",
  "Pagina 2 op",
  "Pagina 3",
  "pagina 44444",
];

class App extends Component {
  state = { page: 0 };

  render() {
    return (
      <div className="parent">
        <div className="lineaBottoni">
          <li className="list">
            <button
              className="button"
              onClick={() => {
                this.setState({ page: 0 });
              }}
            >
              Home
            </button>
            <button
              className="button"
              onClick={() => {
                this.setState({ page: 1 });
              }}
            >
              Pagina 1
            </button>
            <button
              className="button"
              onClick={() => {
                this.setState({ page: 2 });
              }}
            >
              Pagina 2
            </button>
            <button
              className="button"
              onClick={() => {
                this.setState({ page: 3 });
              }}
            >
              Pagina 3
            </button>
            <button
              className="button"
              onClick={() => {
                this.setState({ page: 4 });
              }}
            >
              Pagina 4
            </button>
          </li>
        </div>

        <div className="child">
          {pagine[this.state.page].split("\n").map((str) => (
            <div>{str}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
