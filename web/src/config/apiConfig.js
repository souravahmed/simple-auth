import Axios from "axios";

export const api = Axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});
