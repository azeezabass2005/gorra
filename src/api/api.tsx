import axios from 'axios'

const api = axios.create({
  baseURL: "https://gorra-be.onrender.com/"
})
export default api