import axios from "axios";
const instance = axios.create({
    // baseURL: 'https://prodmart-server.vercel.app' // local
    baseURL: 'https://prodmart-server.vercel.app' // local
    
});
const useAxios = () => {
    return instance
}
export default useAxios