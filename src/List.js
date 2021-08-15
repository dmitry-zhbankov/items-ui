import React from 'react';
import Repository from "./ItemsRepository";
import Button from "react-bootstrap/Button";
import ItemForm from "./ItemForm";
import {ListViewModel} from "./ListViewModel";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = new ListViewModel();
  }

  async componentDidMount() {
    await this.setInitialState();
  }

  async setInitialState() {
    await Repository.getAllItems().then(value => {
      this.setState(new ListViewModel(value))
    });
  }

  async onRemoveItem(id) {
    await Repository.removeItemById(id);
    await Repository.getAllItems().then(value => {
      this.setState(new ListViewModel(value))
    });
  }

  onCreateNewItem() {
    this.setState(new ListViewModel(this.state.items, true))
  }

  onEditItem(item) {
    this.setState(new ListViewModel(this.state.items, true, item))
  }

  async onClose() {
    await Repository.getAllItems().then(value => {
      this.setState(new ListViewModel(value, false))
    });
  }

  async onSave(item) {
    if (item.id == null) {
      await Repository.createItem(item);
    } else {
      await Repository.editItem(item);
    }
    await Repository.getAllItems().then(value => {
      this.setState(new ListViewModel(value, false))
    });
  }

  render() {
    return (
      <div>
        <ItemForm show={this.state.showEditDialog}
                  editItem={this.state.editItem}
                  onSave={async () => {
                    await this.onSave()
                  }}
                  onClose={async () => {
                    await this.onClose()
                  }}/>
        <Container fluid>
          <Row>
            <Col>
              <Button variant="primary" size="lg" onClick={() => {
                this.onCreateNewItem()
              }}>
                Create new item
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table size="sm" bordered="true" striped="true" borderless="false" hover="true">
                <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th></th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                {this.state.items.map(item => (
                  <tr key={item.id.toString()}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <Button variant="primary"
                              onClick={() => {
                                this.onEditItem(item)
                              }}>
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button variant="danger"
                              onClick={async () => {
                                await this.onRemoveItem(item.id)
                              }}>
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </Table>
            </Col>
            <Col/>
            <Col/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default List;
