
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5001/api",
});

axiosInstance.interceptors.request.use((config: any) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})