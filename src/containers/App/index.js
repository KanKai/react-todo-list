import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppContainer } from "./styled";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <h1>Home page</h1>
        <h1>Link to another page</h1>
        <ul>
          <li>
            <Link to="/todos">Todo list</Link>
          </li>
        </ul>
      </AppContainer>
    );
  }
}

export default App;
