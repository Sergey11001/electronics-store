import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Card, Row} from "react-bootstrap";
import {deviceActions} from "../redux/actions";

const BrandBar = ({brands, setSelectedBrand, selectedBrand, fetchBrands}) => {
    useEffect(() => {
        fetchBrands()
    }, [])
    return (
        <Row className='d-flex flex-row justify-content-start'>
            {
                brands.map(item => (
                    <Card
                        style={{cursor:'pointer'}}
                        key={item.id}
                        className='p-3 me-2 w-auto'
                        onClick={() => setSelectedBrand(item)}
                        border={item.id===selectedBrand.id ? 'danger' : 'light'}
                    >
                        {item.name}
                    </Card>
                ))
            }
        </Row>
    );
};

export default connect(({deviceReducer}) => deviceReducer, deviceActions)(BrandBar);