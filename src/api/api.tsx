import axios from 'axios'

const api = axios.create({
  baseURL: "https://demourl.com"
})
export default api