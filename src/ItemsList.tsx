import React, {useEffect, useState} from 'react';
import Repository from "./ItemsRepository";
import Button from "react-bootstrap/Button";
import ItemForm from "./ItemForm";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Item from "./Item";

const ItemsList = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState<Item[]>([]);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [editItem, setEditItem] = useState<Item>();

    async function fetchItems() {
        try {
            setItems(await Repository.getAllItems());
        } catch (e) {
            alert(e);
        }
    }

    async function onRemoveItem(id: number) {
        await Repository.removeItemById(id);
        await fetchItems();
    }

    function onCreateNewItem() {
        setEditItem({} as Item);
        setShowEditDialog(true);
    }

    function onEditItem(item: Item) {
        setEditItem(item);
        setShowEditDialog(true);
    }

    async function onClose() {
        setShowEditDialog(false);
        await fetchItems();
    }

    async function onSave(item: Item) {
        if (item.id == null) {
            await Repository.createItem(item);
        } else {
            await Repository.editItem(item);
        }
        setShowEditDialog(false);
        await fetchItems();
    }

    return (
        <div>
            <ItemForm show={showEditDialog}
                      editItem={editItem}
                      onSave={onSave}
                      onClose={onClose}/>
            <Container fluid>
                <Row>
                    <Col>
                        <Button variant="primary" size="lg" onClick={() => {
                            onCreateNewItem()
                        }}>
                            Create new item
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table size="sm" bordered={true} striped="true" borderless={false} hover={true}>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th/>
                                <th/>
                            </tr>
                            </thead>
                            <tbody>
                            {items.map(item => (
                                <tr key={item.id.toString()}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <Button variant="primary"
                                                onClick={() => {
                                                    onEditItem(item)
                                                }}>
                                            Edit
                                        </Button>
                                    </td>
                                    <td>
                                        <Button variant="danger"
                                                onClick={() => {
                                                    onRemoveItem(item.id)
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
    )
}

export default ItemsList;
