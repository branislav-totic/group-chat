import axios from 'axios';
const port = process.env.BACKEND_PORT || 3001;
const BACKEND_URL = `http://localhost:${port}`;

export const login = async (data = {}) => {
  // // Default options are marked with *
  // const response = await fetch(`${BACKEND_URL}/login`, {
  //   method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //   mode: 'cors', // no-cors, *cors, same-origin
  //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //   credentials: 'same-origin', // include, *same-origin, omit
  //   headers: {
  //     'Content-Type': 'application/json'
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   redirect: 'follow', // manual, *follow, error
  //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //   body: JSON.stringify(data) // body data type must match "Content-Type" header
  // });
  // return response.json(); // parses JSON response into native JavaScript objects
  console.log(data)
  return await axios(`${BACKEND_URL}/login`, data)
    .then((data)=>data.data)
    .then((data)=>data.json())
    .catch((err)=>err);
}