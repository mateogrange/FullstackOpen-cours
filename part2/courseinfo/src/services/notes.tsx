import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

interface Note {
  id?: number;
  content: string;
  important?: boolean
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newObject :Note) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id: string, newObject: Note) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }