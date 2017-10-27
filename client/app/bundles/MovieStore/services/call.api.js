import axios from 'axios';
import config from './api.config';

const token = document.getElementsByName('csrf-token')[0].getAttribute('content');
axios.defaults.headers.common['X-CSRF-Token'] = token;
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
axios.defaults.headers.common['Accept'] = 'application/json';

export default function callApi(endpoint, method = 'get', body, callback) {
  const url = `${config.serverBaseUrl}:${config.port}/${endpoint}`;
  // const config = { headers: { 'Content-Type': 'application/json' } };
  axios[method](url, body)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((error) => {
      callback(error);
    })
}
