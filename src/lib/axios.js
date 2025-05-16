import Axios from "axios";

const axios = Axios.create({
    baseURL: 'https://livreeo.webtrix.ma/api/public',
    headers: {
        Accept: 'application/json',
    },
});

export default axios;