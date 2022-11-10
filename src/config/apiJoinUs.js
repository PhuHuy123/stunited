import axios from "axios";
export const getJoin = () => {
  return axios.get("https://6369c6d315219b84961e87c1.mockapi.io/api/jointeams");
};
