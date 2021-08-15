import logo from './logo.svg';
import './App.css';
import List from "./List";
import React from "react";


function App() {
  const [items, setItems] = React.useState([
    {
      id: 1,
      name: 'Robin'
    },
    {
      id: 2,
      name: 'Dave'
    },
  ]);

  return (
    <List items={items} setItems={setItems}/>
  );
}

export default App;
