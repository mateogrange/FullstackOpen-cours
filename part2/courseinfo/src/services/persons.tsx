import axios from 'axios'
const basrUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(basrUrl)
  return request.then(response => response.data)
}

export default { getAll }