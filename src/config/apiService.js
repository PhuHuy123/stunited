import axios from "axios";

const getApiMenu = () => {
  return axios.get("https://6369b58f28cd16bba7227e74.mockapi.io/Menu");
};

 const storiesApi = () => {
  return axios.get(
    "https://6369c37115219b84961e2a6c.mockapi.io/api/devplus/stories"
  );
};

 const slidersApi = () => {
  return axios.get(
    "https://6369c37115219b84961e2a6c.mockapi.io/api/devplus/sliders"
  );
};

export {
  getApiMenu,
  storiesApi,
  slidersApi,
};
