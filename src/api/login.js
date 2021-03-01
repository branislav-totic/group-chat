import axios from 'axios';
const port = process.env.BACKEND_PORT || 3001;
const BACKEND_URL = `http://localhost:${port}`;

export const login = (loginData = {}) => {
  return axios.post(`${BACKEND_URL}/login`, loginData)
    .then((data)=>{
      setToken(data.data.token)
      return {
        username: data.data.username,
        email: data.data.email,
      }
    })
    .catch((err)=>err);
}

export const loginOut = () => {
  setToken(null);
}

export const createUser = async (data = {}) => {
  console.log(data)
  return await axios.post(`${BACKEND_URL}/user`, data)
    .then((data)=>data.data)
    .then((data)=>data.json())
    .catch((err)=>err);
}

const setToken = (token) => {
  if (sessionStorage.getItem('authtoken')) {
    sessionStorage.removeItem('authtoken');
  }
  sessionStorage.setItem('authtoken', token);
}

export const checkIfTokenExpierd = () => {
  setInterval(()=>{

  }, 30000)
}
