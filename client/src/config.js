import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://careful-bull-pumps.cyclic.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
