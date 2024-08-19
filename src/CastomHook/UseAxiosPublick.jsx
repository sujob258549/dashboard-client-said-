import axios from "axios";

const axiosPublick = axios.create({
    baseURL:import.meta.env.VITE_bakend_url
})

const UseAxiosPublick = () => {
    return axiosPublick
};

export default UseAxiosPublick;