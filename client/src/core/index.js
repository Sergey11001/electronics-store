import axios from "axios";

const $host = axios.create({
    baseURL: 'http://localhost:3333'
})

const $authHost = axios.create({
    baseURL: 'http://localhost:3333'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}` // Добавить токен
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}