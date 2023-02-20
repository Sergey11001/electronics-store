import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/createType";
import CreateBrand from "../components/modals/createBrand";
import CreateDevice from "../components/modals/createDevice";

const Admin = () => {
    const [showTypeModal, setShowTypeModal] = useState(false)
    const [showBrandModal, setShowBrandModal] = useState(false)
    const [showDeviceModal, setShowDeviceModal] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button variant='outline-dark' className='mt-4' onClick={() => setShowTypeModal(true)}>
                Добавить тип
            </Button>
            <Button variant='outline-dark' className='mt-4' onClick={() => setShowBrandModal(true)}>
                Добавить бренд
            </Button>
            <Button variant='outline-dark' className='mt-4' onClick={() => setShowDeviceModal(true)}>
                Добавить устройство
            </Button>
            <CreateType show={showTypeModal} onHide={setShowTypeModal}/>
            <CreateBrand show={showBrandModal} onHide={setShowBrandModal}/>
            <CreateDevice show={showDeviceModal} onHide={setShowDeviceModal}/>
        </Container>
    );
};

export default Admin;