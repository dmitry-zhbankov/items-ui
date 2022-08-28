import React, {useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Item from "./Item";

interface ItemFormProps {
    show: boolean,
    editItem: Item | undefined,
    onSave: (item: Item) => {},
    onClose: () => {}
}

const ItemForm = ({show, editItem, onSave, onClose}: ItemFormProps) => {
    const [id, setId] = useState<number>();
    const [name, setName] = useState<string>();

    const modalTitle = editItem?.id ? "Edit item" : "Create new item";

    useEffect(() => {
        setId(editItem?.id);
        setName(editItem?.name);
    }, [editItem]);

    function handleSave() {
        onSave({id, name} as Item);
    }

    function handleClose() {
        onClose();
    }

    function handleNameChange(e: any) {
        setName(e.target.value);
    }

    return (
        <Modal show={show}>
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
                            <Form.Control type="text" readOnly value={id ?? ""}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" value={name ?? ""} onChange={handleNameChange}/>
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary"
                        onClick={handleSave}>
                    Save Changes
                </Button>
                <Button variant="secondary"
                        onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ItemForm;
