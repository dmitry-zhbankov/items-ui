import logo from './logo.svg';
import './App.css';
import List from "./List";
import React from "react";

const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];

function App() {
  return (
    <List list={list}/>
  );
}

export default App;
