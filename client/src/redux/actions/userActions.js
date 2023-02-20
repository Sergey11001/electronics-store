const ACTIONS = {
    setUserAuth: bool => ({
        type: 'USER:SET_AUTH',
        payload: bool
    }),
    setUser: user =>( {
        type: 'USER:SET_USER',
        payload: user
    })
}

export default ACTIONS