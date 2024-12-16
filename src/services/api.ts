import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URI;

const apiClient = axios.create({
    baseURL: apiUrl,
});

export default apiClient;
