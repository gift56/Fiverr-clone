import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://poised-petticoat-seal.cyclic.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
