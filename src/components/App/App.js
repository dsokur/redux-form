import React, { Component } from 'react';
import '../../App.scss';
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import Main from "../../containers/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Menu/>
        <Main/>
      </div>
    );
  }
}

export default App;

