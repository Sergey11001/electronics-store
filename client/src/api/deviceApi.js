import {$authHost, $host} from "../core";
import jwt_decode from "jwt-decode";

class DeviceApi {
    async createType(type) {
        const {data} = await $authHost.post('/api/type', {name: type})
        return data
    }

    async fetchTypes() {
        const {data} = await $host.get('/api/type')
        return data
    }

    async createBrand(type) {
        const {data} = await $authHost.post('/api/brand', {name: type})
        return data
    }

    async fetchBrands() {
        const {data} = await $host.get('/api/brand')
        return data
    }

    async createDevice(device) {
        const {data} = await $authHost.post('/api/device/', device)
        return data
    }

    async fetchDevices({typeId, brandId, page, limit }) {
        console.log({typeId, brandId, page, limit })
        const {data} = await $host.get('/api/device/', {
            params: {
                typeId,
                brandId,
                page,
                limit
            }
        })
        return data
    }

    async fetchOneDevice(id) {
        const {data} = await $host.get('/api/device/' + id)
        return data
    }
}

export default new DeviceApi()