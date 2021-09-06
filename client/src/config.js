import axios from "axios"

export const axiosInstance = axios.create({
    baseURL:"https://eulerwaves.herokuapp.com/api/"
})