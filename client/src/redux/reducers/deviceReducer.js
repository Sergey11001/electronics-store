const initialState = {
    types: [],
    brands: [],
    selectedType: {},
    selectedBrand: {},
    devices: [],
    currentPage: 1,
    totalCount:0,
    limit:3
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'DEVICE:SET_TYPES':
            return {
                ...state,
                types: payload
            }
        case 'DEVICE:SET_BRANDS':
            return {
                ...state,
                brands: payload
            }
        case 'DEVICE:SET_TOTAL_COUNT':
            return {
                ...state,
                totalCount: payload
            }

        case 'DEVICE:SET_SELECTED_TYPE':
            return {
                ...state,
                selectedType: payload
            }
        case 'DEVICE:SET_SELECTED_BRAND':
            return {
                ...state,
                selectedBrand: payload
            }
        case 'DEVICE:SET_DEVICES':
            return {
                ...state,
                devices: payload
            }
        case 'DEVICE:SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: payload
            }
        default:
            return state
    }
}