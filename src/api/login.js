import axios from 'axios';
const port = process.env.BACKEND_PORT || 3001;
const BACKEND_URL = `http://localhost:${port}`;

export const login = (loginData = {}) => {
  return axios.post(`${BACKEND_URL}/login`, loginData)
    .then(({ data: { token, username, email } }) => {
      setToken(token)
      return {
        username,
        email,
      }
    })
    .catch((err) => err);
}

export const logout = () => {
  setToken(null);
}

export const createUser = async (data = {}) => {
  console.log(data)
  return await axios.post(`${BACKEND_URL}/user`, data)
    .then((data) => data.data)
    .then((data) => data.json())
    .catch((err) => err);
}

const setToken = (token) => {
  if (sessionStorage.getItem('authtoken-chat')) {
    sessionStorage.removeItem('authtoken-chat');
  }
  sessionStorage.setItem('authtoken-chat', token);
}

export const checkIfTokenExpierd = () => {
  setInterval(() => {

  }, 30000)
}

// axios.defaults.headers.post['header1'] = 'value'  for POST requests
// axios.defaults.headers.common['header1'] = 'value'  for all requests
