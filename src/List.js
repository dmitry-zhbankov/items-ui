import React from 'react';

const List = ({list}) => {
  return (
    <table>
      {list.map(item => (
        <tr key={item.id.toString()}>
          <td>{item.id}</td>
          <td>{item.name}</td>
        </tr>
      ))}
    </table>
  );
}

export default List;
