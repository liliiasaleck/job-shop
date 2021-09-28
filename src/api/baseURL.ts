import axios from 'axios'

const api = axios.create({
  baseURL:'https://jobshop-back.herokuapp.com',
})

export default api