import React from 'react';
import Repository from "./ItemsRepository";

const List = ({items, setItems}) => {
  async function OnRemoveItem(id) {
    await Repository.removeItemById(id);
    let allItems = await Repository.getAllItems();
    setItems(allItems);
  }

  return (
    <table>
      {items.map(item => (
        <tr key={item.id.toString()}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <button onClick={event => OnRemoveItem(item.id)}>
              Remove
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default List;
