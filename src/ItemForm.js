import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.state = {
      id: props.editItem?.id,
      name: props.editItem?.name
    };
  }

  componentWillReceiveProps(nextProps, state) {
    this.setState({
      id: nextProps.editItem?.id,
      name: nextProps.editItem?.name
    });
  }

  handleSave() {
    this.props.onSave(this.state);
  }

  handleClose() {
    this.props.onClose();
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }

  render() {
    const modalTitle = (this.props.editItem?.id == null) ? "Create new item" : "Edit item";

    return (
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Id
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" readOnly value={this.state.id}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" value={this.state.name} onChange={this.handleNameChange}/>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"
                  onClick={this.handleSave}>
            Save Changes
          </Button>
          <Button variant="secondary"
                  onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ItemForm;
