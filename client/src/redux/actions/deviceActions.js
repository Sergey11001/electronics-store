import DeviceApi from "../../api/deviceApi";

const ACTIONS = {
    setTypes: types => ({
        type: 'DEVICE:SET_TYPES',
        payload: types
    }),
    setBrands: brands => ({
        type: 'DEVICE:SET_BRANDS',
        payload: brands
    }),
    setDevices: devices => ({
        type: 'DEVICE:SET_DEVICES',
        payload: devices
    }),
    setTotalCount: count => ({
        type: 'DEVICE:SET_TOTAL_COUNT',
        payload: count
    }),
    setCurrentPage: index => ({
        type: 'DEVICE:SET_CURRENT_PAGE',
        payload: index
    }),
    setSelectedType: item => ({
        type: 'DEVICE:SET_SELECTED_TYPE',
        payload: item
    }),
    setSelectedBrand: item => ({
        type: 'DEVICE:SET_SELECTED_BRAND',
        payload: item
    }),
    fetchTypes: () => dispatch => {
        DeviceApi.fetchTypes().then(data => dispatch(ACTIONS.setTypes(data)))
    },
    fetchBrands: () => dispatch => {
        DeviceApi.fetchBrands().then(data => dispatch(ACTIONS.setBrands(data)))
    },
    fetchDevices: ({typeId, brandId, page, limit = 3}) => dispatch => {
        console.log({typeId, brandId, page, limit})
        DeviceApi.fetchDevices({typeId, brandId, page, limit}).then(data => {
            dispatch(ACTIONS.setDevices(data.rows))
            dispatch(ACTIONS.setTotalCount(data.count))
        })
    }
}
export default ACTIONS