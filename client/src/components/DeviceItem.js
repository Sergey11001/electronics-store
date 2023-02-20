import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.svg'
import {useNavigate} from "react-router-dom";

const DeviceItem = ({img, rating, name, id}) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className='mb-4' onClick={() => navigate('/device/' + id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border="light">
                <Image width={150} height={150} src={'http://localhost:3333/'+img}/>
                <div className='d-flex justify-content-sm-between mt-1'>
                    <div>Samsung</div>
                    <div className='d-flex justify-content-sm-between align-items-center'>
                        <div className='me-1'>{rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div className="mt-1">{name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;