import axios from 'axios';


export const userLogin = () => {
    return axios
        .get(`http://localhost:8000/profile`)
        .then((res) => res.data)
        .catch((err) => err.response.data);
};