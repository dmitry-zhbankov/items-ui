import React from 'react';

const List = ({list}) => (
  <ul>
    {list.map(item => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
      </li>
    ))}
  </ul>
);

export default List;
