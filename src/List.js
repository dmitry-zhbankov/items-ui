import React from 'react';
import Repository from "./ItemsRepository";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  async componentDidMount() {
    await this.setInitialState();
  }

  async setInitialState() {
    await Repository.getAllItems().then(value => this.setState({items: value}))
  }

  async OnRemoveItem(id) {
    await Repository.removeItemById(id);
    let allItems = await Repository.getAllItems();
    this.setState({items: allItems});
  }

  render() {
    return (
      <table>
        {this.state.items.map(item => (
          <tr key={item.id.toString()}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <button onClick={event => this.OnRemoveItem(item.id)}>
                Remove
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

export default List;
