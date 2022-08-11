
import axios, {
    AxiosResponse,
    AxiosRequestConfig,
    AxiosInstance,
    AxiosError,
  } from "axios"
    
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 120000,
  })
  
  
  const errorHandler = (error: AxiosError) => {
  
    if (error?.response?.data) {
      console.error(error?.response?.data);
    }
  
    return Promise.reject(error?.response)
  }
  
  const resHandler = (response: AxiosResponse) => {
    let { data } = response
  
    return Promise.resolve(data)
  }
  
  const reqHandler = (config: AxiosRequestConfig) => {
    return config
  }
  
  axiosInstance.interceptors.request.use(reqHandler)
  axiosInstance.interceptors.response.use(resHandler, errorHandler)

  export default axiosInstance