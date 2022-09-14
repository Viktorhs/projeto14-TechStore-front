import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;


function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("techstore"))
    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    };

    return config;
}