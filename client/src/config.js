import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://api.getgptchamp.com",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
