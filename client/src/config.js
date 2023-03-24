import axios from "axios";
export const Axios = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
