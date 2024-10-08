import axios from 'axios'
const basrUrl = 'http://localhost:3001/persons'

interface Persons {
  id: number;
  name: string;
  number: string;
}

const getAll = () => {
  const request = axios.get(basrUrl)
  return request.then(response => response.data)
}

const create = (nameObject :Persons)=> {
  const request = axios.post(basrUrl, nameObject)
  return request.then(response => response.data)
}

export default { getAll, create }