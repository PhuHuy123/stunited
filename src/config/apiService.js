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

const getPartners = () => {
  return axios.get(
    "https://636c5b977f47ef51e146e189.mockapi.io/clients-partners"
  );
};

const getPortfolioApi = () => {
  return axios.get(
    "https://6369c37115219b84961e2a6c.mockapi.io/api/devplus/portfolio"
  );
};

const getBannersApi = () => {
  return axios.get(
    "https://6369c37115219b84961e2a6c.mockapi.io/api/devplus/banners"
  );
};
const getServices = () => {
  return axios.get("https://6369c6d315219b84961e87c1.mockapi.io/api/services");
};
const getJoinApi = () => {
  return axios.get("https://6369c6d315219b84961e87c1.mockapi.io/api/jointeams");
};

export {
  getApiMenu,
  storiesApi,
  slidersApi,
  getPartners,
  getPortfolioApi,
  getBannersApi,
  getServices,
  getJoinApi,
};
