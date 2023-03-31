import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://cyan-sheep-belt.cyclic.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    credentials: "include",
  },
});
