import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from "./List";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <List/>
      </div>
    );
  }
}

export default App;
