import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

interface Persons {
  id: string;
  name: string;
  number: string;
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (nameObject :Persons)=> {
  const request = axios.post(baseUrl, nameObject)
  return request.then(response => response.data)
}

const deleteName = (id: string) => {
  return axios.delete(`${baseUrl}/${id}`);
}

const getId = (name : string) => {
  return axios.get(`${baseUrl}?name=${name}`)
}

const updateNumber = (id: string, name: string, number: string) => {
  return axios.put(`http://localhost:3001/persons/${id}`, {
    name: name,
    number: number
  })
}

export default { getAll, create, deleteName, updateNumber, getId }