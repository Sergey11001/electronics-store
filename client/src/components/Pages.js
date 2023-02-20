import React from 'react';
import {connect} from "react-redux";
import {Pagination} from "react-bootstrap";
import {deviceActions} from "../redux/actions";

const Pages = ({totalCount, limit, currentPage, setCurrentPage}) => {
    const pageCount = Math.ceil(totalCount / limit)
    console.log(pageCount, totalCount, limit)
    const pages = [...Array(pageCount)].map((e, i) => i + 1)
    console.log(pages)
    return (
        <Pagination>
            {
                pages.map(i => (
                    <Pagination.Item key={i} active={currentPage===i} onClick={()=>setCurrentPage(i)}>{i}</Pagination.Item>
                ))
            }
        </Pagination>
    );
};

export default connect(({deviceReducer}) => deviceReducer, deviceActions)(Pages);