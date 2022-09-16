import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE_URL;
//const BASE_URL = 'http://localhost:5000';


function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("techstore"))
    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    };

    return config;
}

function logout() {
    const header = createHeaders()
    const promise = axios.delete(`${BASE_URL}/logout` ,header);
    return promise;
}

export {BASE_URL, logout};