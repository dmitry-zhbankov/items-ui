import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
          {modalTitle}
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>
              Id
            </label>
            <input readOnly={true} value={this.state.id}/>
          </div>
          <div>
            <label>
              Name
            </label>
            <input value={this.state.name} onChange={this.handleNameChange}/>
          </div>
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
