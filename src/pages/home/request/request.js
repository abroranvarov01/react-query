import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3600",
  headers: {
    "Content-Type": "application/json",
  },
});

export default request;
