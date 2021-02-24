import axios from "axios";
//axios has advantage of using base URL
const instance = axios.create({
  baseURL: "...", // The api / cloud function
});
export default instance; 
