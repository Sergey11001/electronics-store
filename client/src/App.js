import {connect} from "react-redux";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {userActions} from "./redux/actions";
import {useEffect, useState} from "react";
import UserApi from "./api/userApi";
import {Spinner} from "react-bootstrap";

function App({user, setUser, setUserAuth}) {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        UserApi.check().then(data => {
            setUser(data)
            setUserAuth(true)
        })
            .finally(() => setLoading(false))
    }, [])
if(loading){
    return <Spinner animation='grow'></Spinner>
}

    return (
        <div className="wrapper">
            <NavBar/>
            <AppRouter/>
        </div>
    );
}

export default connect(({userReducer}) => userReducer, userActions)(App);
