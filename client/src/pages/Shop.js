import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {connect} from "react-redux";
import {deviceActions} from "../redux/actions";
import Pages from "../components/Pages";

const Shop = ({fetchDevices, currentPage, selectedType, selectedBrand, limit, setCurrentPage}) => {
    useEffect(() => {
        fetchDevices({page:currentPage, typeId: selectedType.id, brandId:selectedBrand.id, limit})
    },[selectedType.id, selectedBrand.id, currentPage])
    useEffect(() => {
        setCurrentPage(1)
    },[selectedType.id, selectedBrand.id])
    return (
        <Container>
            <Row  className="mt-4">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
};

export default connect(({deviceReducer}) => deviceReducer, deviceActions)(Shop);