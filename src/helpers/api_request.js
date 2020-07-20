import axios from "axios";
import { getToken } from "./auth";

const URI_BASE = "http://localhost:3001/"; 

const api = axios.create({
  baseURL: URI_BASE,
  headers:{'Content-Type': 'application/json'}
});

api.interceptors.request.use(config => {
   try {
     const token = getToken();
     if(token){
       config.headers.Authorization = `Bearer ${token}`;
     } 
     return config;
   } catch (error) {
     console.log("Erro na api de auth")
     console.log(error)
   }
}, (err) => Promise.reject(err))

export default api;