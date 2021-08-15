import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSave() {
    this.props.onSave();
  }

  handleClose() {
    this.props.onClose();
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
            <input name="id" readOnly={true} value={this.props.editItem?.id}/>
          </div>
          <div>
            <label>
              Name
            </label>
            <input name="name" value={this.props.editItem?.name}/>
          </div>
          <button>Submit</button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"
                  onClick={() => {
                    this.handleSave();
                  }}>
            Save Changes
          </Button>
          <Button variant="secondary"
                  onClick={() => {
                    this.handleClose();
                  }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ItemForm;
