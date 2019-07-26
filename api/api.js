import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost/lccares_alpha/wp-json/',
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}