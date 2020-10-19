import axios from 'axios'

const api = axios.create({
	baseURL: 'http://192.168.1.205:3333',
})

export default api
