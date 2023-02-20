import React from 'react';
import {connect} from "react-redux";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/constants";
import {userActions} from "../redux/actions";

const NavBar = ({isAuth, setUserAuth, setUser}) => {
    const navigate = useNavigate()
    const loginOut = () => {
        setUserAuth(false)
        setUser({})
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{textDecoration:"none", color:'white'}} to={SHOP_ROUTE}>Electronic</NavLink>
                {
                    isAuth ?
                        <Nav className="ml-auto">
                            <Button variant={"outline-light"} className='me-3' onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                            <Button variant={"outline-light"} onClick={loginOut}>Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                }
            </Container>
        </Navbar>
    );
};

export default connect(({userReducer}) => userReducer, userActions )(NavBar);