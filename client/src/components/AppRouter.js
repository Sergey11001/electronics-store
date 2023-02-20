import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/constants";
import {connect} from "react-redux";
import userReducer from "../redux/reducers/userReducer";
import {userActions} from "../redux/actions";

const AppRouter = ({user, isAuth}) => {
    return (
        <Routes>
            {
                isAuth &&
                authRoutes.map(({path, element}) => (
                    <Route key={path} path={path} element={element} />
                ))

            }
            {
                publicRoutes.map(({path, element}) => (
                    <Route key={path} path={path} element={element} />
                ))
            }
            <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
        </Routes>
    );
};

export default connect(({userReducer}) => userReducer, userActions)(AppRouter);