import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:5000' // local
    // baseURL: 'https://prodexa-api.vercel.app/' // live
});
const useAxios = () => {
    return instance
}
export default useAxios