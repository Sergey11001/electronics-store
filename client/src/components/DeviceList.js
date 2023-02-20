import React from 'react';
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import {connect} from "react-redux";
import {deviceActions} from "../redux/actions";

const DeviceList = ({devices}) => {
    return (
        <Row>
            {
                devices.map(item => (
                    <DeviceItem key={item.id} {...item} />
                ))
            }
        </Row>
    );
};

export default connect(({deviceReducer}) => deviceReducer, deviceActions)(DeviceList);