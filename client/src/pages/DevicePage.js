import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

import bigStar from "../assets/big-star.svg"
import DeviceApi from "../api/deviceApi";

const DevicePage = () => {
    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()
    useEffect(() => {
        DeviceApi.fetchOneDevice(id)
            .then(data => setDevice(data))
    },[])

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Image width={250} height={250} src={"http://localhost:3333/" + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 200,
                                height: 200,
                                backgroundSize: 'contain'
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-center'
                        style={{width: 250, height: 250, border: '5px solid lightgrey'}}
                    >
                        <h3>от {device.price} рублей</h3>
                        <Button variant='outline-dark'>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3 mt-5'>
                <h1>Характеристики</h1>
                {
                    device.info.map((info, i) => (
                        <Row key={info.id} style={{background: i % 2 === 0 ? 'lightgrey' : 'transparent', padding:10}}>
                            {info.title}: {info.description}
                        </Row>
                    ))
                }
            </Row>
        </Container>
    );
};

export default DevicePage;