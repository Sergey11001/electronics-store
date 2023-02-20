import React, {useState} from 'react';
import {connect} from "react-redux";
import {Button, Card, Container, Form, FormControl, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/constants";
import UserApi from "../api/userApi";
import {userActions} from "../redux/actions";

const Auth = ({setUser, setUserAuth}) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const authButtonClick = async () => {
        try{
            let user;
            if(isLogin){
                user = await UserApi.login({email, password})


            }
            else{
                user = await UserApi.registration({email, password})
            }
            setUser(user)
            setUserAuth(true)
            navigate(SHOP_ROUTE)
        }
        catch (e){
            alert(e.message)
        }


    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center flex-column"
            style={{height: window.innerHeight - 54}}
        >
            <Card className="p-5 col-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className='d-flex flex-column'>
                    <FormControl
                        className='mt-2'
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormControl
                        className='mt-3'
                        placeholder="Введите ваш пароль..."
                        value={password}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Row className='d-flex flex-row align-items-center mt-3 ps-3 pe-3'>
                        <Button variant='outline-success' onClick={authButtonClick}>
                            {
                                isLogin ?
                                    "Войти"
                                    :
                                    "Зарегистрироваться"
                            }
                        </Button>
                        {
                            isLogin ?
                                <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                                :
                                <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                        }
                    </Row>
                </Form>
            </Card>

        </Container>
    );
};

export default connect(({userReducer}) => userReducer, userActions)(Auth);