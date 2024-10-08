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
};

export default { getAll, create, deleteName }