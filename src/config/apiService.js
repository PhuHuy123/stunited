import axios from "axios";

const getApiMenu=()=>{
    return axios.get('https://6369b58f28cd16bba7227e74.mockapi.io/Menu')
}
export{
    getApiMenu,
}
