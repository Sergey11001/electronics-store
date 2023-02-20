import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import DeviceApi from "../../api/deviceApi";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addNewtBrand = () => {
        DeviceApi.createBrand(value).then(() => {
            setValue('')
            onHide()
        })
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
                    Добавить новый брэнд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <FormControl
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        placeholder="Введите название брэнда"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={() => onHide()}>Закрыть</Button>
                <Button variant='outline-success' onClick={addNewtBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default CreateBrand;