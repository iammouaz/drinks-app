import axios from 'axios'
const axiosClient = axios.create()

export const AxiosInstance = () => {

  axiosClient.defaults.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/'

  axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  axiosClient.interceptors.response.use(
    (response) =>
      response,
    (error) => {
      return Promise.reject(error)
    },
  )

  return { axiosClient }
}
