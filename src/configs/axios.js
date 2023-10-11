import axios from "axios";
import {BASE_API_URL} from "../constants";

axios.defaults.baseURL = BASE_API_URL
axios.defaults.withCredentials = true // send cookie for every axios

export const axiosConfigs = () => {
    //REQUEST
    axios.interceptors.request.use(
        async (config) => {
            return config;
        },
        error => {
            // if (error && error.request) {}
            return Promise.reject(error);
        });

    //RESPONSE
    axios.interceptors.response.use(
        function (response) {
            return response;
        },
        async function (error) {
            return Promise.reject(error);
        }
    );
}