import axios from 'axios'

export function axiosWithAuth() {
  return localStorage.getItem('payload')
}

export default function() {
  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      Authorization: axiosWithAuth(),
    }
  })
};