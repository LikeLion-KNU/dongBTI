import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.dongbti.com",
    withCredentials: true,
});
