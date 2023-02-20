import {$authHost, $host} from "../core";
import jwt_decode from 'jwt-decode'

class UserApi{
    async registration({email, password}){
        const {data} =  await $host.post('/api/user/registration', {email, password, role: "ADMIN"})
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    }
    async login({email, password}){
        const {data} = await $host.post('/api/user/login', {email, password})
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    }
    async check(){
        const {data} = await $authHost.get('/api/user/auth')
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    }
}

export default new UserApi()