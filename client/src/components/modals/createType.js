import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import DeviceApi from "../../api/deviceApi";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addNewtType = () => {
        DeviceApi.createType(value).then(() => {
            setValue('')
            onHide()
        } )
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Введите название типа"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={() => onHide()}>Закрыть</Button>
                <Button variant='outline-success' onClick={addNewtType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;