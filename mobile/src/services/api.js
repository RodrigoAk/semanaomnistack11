import axios from 'axios';

const api = axios.create({
    baseURL: 'http://m9-tan.anonymous.mobile.exp.direct:3333'
});

export default api;