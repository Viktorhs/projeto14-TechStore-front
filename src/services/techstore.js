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

function getProducts() {
    const promise = axios.get(`${BASE_URL}/produtos`)
    return promise
}

function logout() {
    const header = createHeaders()
    const promise = axios.delete(`${BASE_URL}/logout` ,header);
    return promise;
}

function getCart() {
    const header = createHeaders()
    const promise = axios.get(`${BASE_URL}/carrinho`, header)
    return promise
}

function addCart(id) {
    const header = createHeaders()
    const promise = axios.post(`${BASE_URL}/addCarrinho/${id}`,[], header)
    return promise
}

function removeOneQuantity(id) {
    const header = createHeaders()
    const promise = axios.post(`${BASE_URL}/removeOne/${id}`,[], header)
    return promise
}

function removeItem(id) {
    const header = createHeaders()
    const promise = axios.delete(`${BASE_URL}/removeItem/${id}`, header)
    return promise
}


export {BASE_URL, logout, getProducts, addCart, removeOneQuantity, removeItem, getCart};