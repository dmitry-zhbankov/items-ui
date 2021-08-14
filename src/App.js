import logo from './logo.svg';
import './App.css';
import List from "./List";
import React from "react";

const list = [
  {
    id: 1,
    name: 'Robin'
  },
  {
    id: 2,
    name: 'Dave'
  },
];

function App() {
  return (
    <List list={list}/>
  );
}

export default App;
