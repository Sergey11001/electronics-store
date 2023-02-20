const initialState = {
    isAuth: false,
    user: {}
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'USER:SET_AUTH':
            return {
                ...state,
                isAuth: payload
            }
        case 'USER:SET_USER':
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}