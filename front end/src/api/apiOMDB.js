import axios from "axios";

const apiOMDB = axios.create({
    baseURL: "https://www.omdbapi.com",
    withCredentials: true
})


export default apiOMDB;