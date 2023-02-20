import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {ListGroup} from "react-bootstrap";
import {deviceActions} from "../redux/actions";

const TypeBar = ({types, selectedType, setSelectedType, fetchTypes}) => {

    useEffect(() => {
        fetchTypes()
    }, [])
    return (
        <ListGroup>
            {
                types.map((item) => (
                    <ListGroup.Item
                        key={item.id}
                        style={{cursor:'pointer'}}
                        onClick={() => setSelectedType(item)}
                        active={item.id===selectedType.id}
                    >
                        {item.name}
                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    );
};

export default connect(({deviceReducer}) => deviceReducer, deviceActions)(TypeBar);