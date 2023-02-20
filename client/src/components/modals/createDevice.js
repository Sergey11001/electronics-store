import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {deviceActions} from "../../redux/actions";
import deviceApi from "../../api/deviceApi";
import DeviceApi from "../../api/deviceApi";

const CreateDevice = ({show, onHide, types, brands, setSelectedType, setSelectedBrand, selectedType, selectedBrand}) => {
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState()
    const [file, setFile] = useState(null)
    const addNewtDevice = () => {
        onHide()
    }
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: new Date()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter((item) => item.number !== number))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const changeInfo = ({key, value, number}) => {
        setInfo(info.map(i => i.number===number ? {...i, [key]:value} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append("name",name)
        formData.append("price",`${price}`)
        formData.append("img",file)
        formData.append("brandId",selectedBrand.id)
        formData.append("typeId",selectedType.id)
        formData.append("info", JSON.stringify(info))
        console.log(formData)
        DeviceApi.createDevice(formData)
            .then(() => onHide())
    }

    useEffect(() => {
        setSelectedType({})
        setSelectedBrand({})
    }, [])

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
                    <Dropdown className='mb-2'>
                        <Dropdown.Toggle>{selectedType?.name ? selectedType.name : "Выбирите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                types.map(item => (
                                    <Dropdown.Item key={item.id} onClick={() => setSelectedType(item)} style={{background: selectedType.id===item.id ? '#0d6efd':'', color:  selectedType.id===item.id ? 'white':''}}>{item.name}</Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle>{selectedBrand?.name ? selectedBrand.name : "Выбирите брэнд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                brands.map(item => (
                                    <Dropdown.Item key={item.id} onClick={() => setSelectedBrand(item)} style={{background: selectedBrand.id===item.id ? '#0d6efd':'', color:  selectedBrand.id===item.id ? 'white':''}}>{item.name}</Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='mt-2'
                        placeholder="Введите название устройства"
                    />
                    <FormControl
                        value={price ? price : ''}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className='mt-2'
                        placeholder="Введите стоимость устройства"
                        type='number'
                    />
                    <FormControl
                        className='mt-2'
                        type='file'
                        onChange={(e) => selectFile(e)}
                    />
                    <hr/>
                    <Button
                        variant='outline-dark'
                        onClick={addInfo}
                        className='mb-2'
                    >
                        Добавить свойство
                    </Button>
                    {
                        info.map(item => (
                            <Row className='mb-2' key={item.number}>
                                <Col md={4}>
                                    <FormControl onChange={(e) => changeInfo({key:"title", value:e.target.value, number:item.number})} value={item.title} placeholder="Введите название свойства"/>
                                </Col>
                                <Col md={4}>
                                    <FormControl onChange={(e) => changeInfo({key:"description", value:e.target.value, number:item.number})} value={item.description} placeholder="Введите описание свойства"/>
                                </Col>
                                <Col md={4}>
                                    <Button variant='outline-danger' onClick={() => removeInfo(item.number)}>
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        ))
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={() => onHide()}>Закрыть</Button>
                <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default connect(({deviceReducer}) => deviceReducer, deviceActions)(CreateDevice);